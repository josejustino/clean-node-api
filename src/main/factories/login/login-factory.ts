import { LogMongoRepository } from '../../../infra/db/mongodb/log'
import { BcryptAdapter } from '../../../infra/criptography'
import { AccountMongoRepository } from '../../../infra/db/mongodb/account'
import { type Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log'
import { makeLoginValidation } from './login-validation-factory'
import { LoginController } from '../../../presentation/controllers/login/login'
import { DbAuthentication } from '../../../data/usecases/authentication'

export const makeLoginController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAuthentication(bcryptAdapter, accountMongoRepository)

  const loginController = new LoginController(dbAddAccount, makeLoginValidation())
  const logMongoRepository = new LogMongoRepository()

  return new LogControllerDecorator(loginController, logMongoRepository)
}
