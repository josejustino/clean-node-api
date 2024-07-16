import { type Authentication, type AuthenticationParams } from '../../../domain/usecases/authentication'
import { type LoadAccountByEmailRepository } from '../../protocols/db'
import { type HashComparer } from '../../protocols/cryptography'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  private readonly hashComparer: HashComparer

  constructor (
    loadAccountByEmailRepository: LoadAccountByEmailRepository,
    hashComparer: HashComparer
  ) {
    this.loadAccountByEmailRepository = loadAccountByEmailRepository
    this.hashComparer = hashComparer
  }

  async auth (params: AuthenticationParams): Promise<string | null> {
    const account = await this.loadAccountByEmailRepository.load(params.email)
    if (account) {
      await this.hashComparer.compare(params.password, account?.password)
    }
    return null
  }
}
