import { type AccountModel } from '../../../domain/models/account'
import { type AddAccount, type AddAccountModel } from '../../../domain/usecases/add-account'
import { type Hasher } from '../../protocols/cryptography'
import { type AddAccountRepository } from '../../protocols/db/account'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (accountData: AddAccountModel): Promise<AccountModel | null> {
    const hashedPassword = await this.hasher.hash(accountData.password)

    const account = await this.addAccountRepository.add({ ...accountData, password: hashedPassword })

    return account
  }
}
