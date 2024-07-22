import { type Router } from 'express'

import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeSignUpController, makeLoginController } from '../factories/controllers'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
