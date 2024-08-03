import { type Controller } from '../../../../presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'
import { LoginController } from '../../../../presentation/controllers/login'
import { makeDbAuthentication } from '../../usecases/authentication'
import { makeLogControllerDecorator } from '../../decorators'

export const makeLoginController = (): Controller => {
  return makeLogControllerDecorator(new LoginController(makeDbAuthentication(), makeLoginValidation()))
}
