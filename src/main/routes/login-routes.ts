import { type Router } from 'express'

import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeSignUpController, makeSignInController } from '@/main/factories/controllers/login'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/signin', adaptRoute(makeSignInController()))
}
