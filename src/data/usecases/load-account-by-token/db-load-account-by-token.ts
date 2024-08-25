import { type AccountModel } from '../../../domain/models'
import { type LoadAccountByToken } from '../../../domain/usecases'
import { type Decrypter } from '../../protocols/cryptography'
import { type LoadAccountByTokenRepository } from '../../protocols/db/account'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel | null> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null
  }
}
