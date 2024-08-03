import { type Controller } from '../../../../../presentation/protocols'
import { makeSignInValidation } from './signin-validation-factory'
import { SignInController } from '../../../../../presentation/controllers/login/signin'
import { makeDbAuthentication } from '../../../usecases/authentication'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeSignInController = (): Controller => {
  return makeLogControllerDecorator(new SignInController(makeDbAuthentication(), makeSignInValidation()))
}
