import { type Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '@/main/factories/decorators'
import { makeDbLoadSurveyById } from '@/main/factories/usecases/survey'
import { SaveSurveyResultController } from '@/presentation/controllers/survey-result'
import { makeDbSaveSurveyResult } from '@/main/factories/usecases/survey-result'

export const makeSaveSurveyResultController = (): Controller => {
  return makeLogControllerDecorator(
    new SaveSurveyResultController(
      makeDbLoadSurveyById(),
      makeDbSaveSurveyResult()
    )
  )
}
