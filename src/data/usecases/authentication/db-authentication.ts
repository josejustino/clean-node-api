import { type Authentication, type AuthenticationParams } from '../../../domain/usecases/authentication'
import { type LoadAccountByEmailRepository } from '../../protocols/db'

export class DbAuthentication implements Authentication {
  private readonly loadAccountByEmailRepositoryStub: LoadAccountByEmailRepository

  constructor (loadAccountByEmailRepositoryStub: LoadAccountByEmailRepository) {
    this.loadAccountByEmailRepositoryStub = loadAccountByEmailRepositoryStub
  }

  async auth (params: AuthenticationParams): Promise<string | null> {
    await this.loadAccountByEmailRepositoryStub.load(params.email)
    return null
  }
}
