import { makeLogControllerDecorator } from '../../../decorators'
import { SignUpController } from '../../../../../presentation/controllers/login/signup'
import { type Controller } from '../../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../../../../factories/usecases/account'
import { makeDbAddAccount } from '../../../usecases/account'

export const makeSignUpController = (): Controller => {
  return makeLogControllerDecorator(new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication()))
}
