import { type Authentication, type AuthenticationParams } from '../../../domain/usecases/authentication'
import { type LoadAccountByEmailRepository } from '../../protocols/db'
import { type TokenGenerator, type HashComparer } from '../../protocols/cryptography'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer
  private readonly tokenGenerator: TokenGenerator

  constructor (
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer,
    tokenGenerator: TokenGenerator
  ) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
    this.tokenGenerator = tokenGenerator
  }

  async auth (params: AuthenticationParams): Promise<string | null> {
    const account = await this.loadAccountByEmailRepository.load(params.email)
    if (account) {
      const isValid = await this.hashComparer.compare(params.password, account?.password)
      if (isValid) {
        const accessToken = await this.tokenGenerator.generate(account.id)
        return accessToken
      }
    }
    return null
  }
}
