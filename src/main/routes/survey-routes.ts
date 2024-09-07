import { type Router } from 'express'

import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController, makeLoadSurveysController } from '../factories/controllers/survey'
import { makeAuthMiddleware } from '../factories/middlewares'
import { adaptMiddleware } from '../adapters'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
  const auth = adaptMiddleware(makeAuthMiddleware())
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
