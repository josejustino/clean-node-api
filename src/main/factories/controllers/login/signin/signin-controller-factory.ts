import { type Controller } from '@/presentation/protocols'
import { makeSignInValidation } from './signin-validation-factory'
import { SignInController } from '@/presentation/controllers/login'
import { makeDbAuthentication } from '@/main/factories/usecases/account'
import { makeLogControllerDecorator } from '@/main/factories/decorators'

export const makeSignInController = (): Controller => {
  return makeLogControllerDecorator(new SignInController(makeDbAuthentication(), makeSignInValidation()))
}
