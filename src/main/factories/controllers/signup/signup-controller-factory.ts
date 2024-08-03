import { makeLogControllerDecorator } from './../../decorators'
import { SignUpController } from '../../../../presentation/controllers/signup'
import { type Controller } from '../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../usecases/authentication'
import { makeDbAddAccount } from '../../usecases/add-account'

export const makeSignUpController = (): Controller => {
  return makeLogControllerDecorator(new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication()))
}
