import { type AccountModel } from '../../../domain/models'
import { type LoadAccountByToken } from '../../../domain/usecases'
import { type Decrypter } from '../../protocols/cryptography'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (private readonly decrypter: Decrypter) {}

  async load (accessToken: string, role?: string): Promise<AccountModel | null> {
    await this.decrypter.decrypt(accessToken)
    return null
  }
}
