import { type Router } from 'express'

import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSignUpController, makeSignInController } from '../factories/controllers'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/signin', adaptRoute(makeSignInController()))
}
