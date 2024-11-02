import { type Router } from 'express'

import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { auth } from '@/main/middlewares'
import { makeSaveSurveyResultController } from '../factories/controllers/survey-result'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth, adaptRoute(makeSaveSurveyResultController()))
}
