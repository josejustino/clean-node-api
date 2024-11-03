import { type AccountModel } from '@/domain/models/account'
import { type AddAccount, type AddAccountParams } from '@/domain/usecases/account/add-account'
import { type Hasher } from '@/data/protocols/cryptography'
import { type LoadAccountByEmailRepository, type AddAccountRepository } from '@/data/protocols/db/account'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository
  ) {}

  async add (accountData: AddAccountParams): Promise<AccountModel | null> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(accountData.email)
    if (!account) {
      const hashedPassword = await this.hasher.hash(accountData.password)
      const newAccount = await this.addAccountRepository.add({ ...accountData, password: hashedPassword })
      return newAccount
    }
    return null
  }
}
