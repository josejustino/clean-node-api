import { type Authentication, type AuthenticationParams } from '@/domain/usecases/account/authentication'
import { type UpdateAccessTokenRepository, type LoadAccountByEmailRepository } from '@/data/protocols/db/account'
import { type Encrypter, type HashComparer } from '@/data/protocols/cryptography'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {}

  async auth (params: AuthenticationParams): Promise<string> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(params.email)
    if (account) {
      const isValid = await this.hashComparer.compare(params.password, account?.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        if (accessToken) {
          await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)
          return accessToken
        }
      }
    }
    return null
  }
}
