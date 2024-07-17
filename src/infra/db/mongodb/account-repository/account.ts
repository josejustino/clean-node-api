import { MongoHelper } from '../helpers/mongo-helper'

import { type LoadAccountByEmailRepository, type AddAccountRepository } from '../../../../data/protocols/db'
import { type AccountModel } from '../../../../domain/models/account'
import { type AddAccountModel } from '../../../../domain/usecases/add-account'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const { insertedId: id } = result
    const account = await accountCollection.findOne({ _id: id })
    return MongoHelper.map(account)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ email })
    return account && MongoHelper.map(account)
  }
}
