import { type Authentication, type AuthenticationParams } from '../../../domain/usecases/authentication'
import { type UpdateAccessTokenRepository, type LoadAccountByEmailRepository } from '../../protocols/db'
import { type Encrypter, type HashComparer } from '../../protocols/cryptography'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer
  private readonly encrypter: Encrypter
  private readonly updateAccessTokenRepository: UpdateAccessTokenRepository

  constructor (
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer,
    encrypter: Encrypter,
    updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.encrypter = encrypter
    this.updateAccessTokenRepository = updateAccessTokenRepository
  }

  async auth (params: AuthenticationParams): Promise<string | null> {
    const account = await this.loadAccountByEmailRepository.load(params.email)
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
