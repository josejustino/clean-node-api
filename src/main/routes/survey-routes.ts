import { type Router } from 'express'

import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAddSurveyController, makeLoadSurveysController } from '../factories/controllers/survey'
import { adminAuth, auth } from '../middlewares'

export default (router: Router): void => {
  router.post('/surveys', adminAuth, adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth, adaptRoute(makeLoadSurveysController()))
}
