import { MongoHelper } from '../helpers/mongo-helper'

import { type AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { type AccountModel } from '../../../../domain/models/account'
import { type AddAccountModel } from '../../../../domain/usecases/add-account'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const insertedResult = await accountCollection.insertOne(accountData)

    return { ...accountData, id: insertedResult.insertedId as unknown as string }
  }
}
