import { type Controller } from '../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../decorators'
import { AddSurveyController } from '../../../../presentation/controllers/survey/add-survey/add-survey-controller'
import { makeSurveyValidation } from './add-survey-validation-factory'
import { makeDbAddSurvey } from '../../usecases/surveys'

export const makeAddSurveyController = (): Controller => {
  return makeLogControllerDecorator(new AddSurveyController(makeSurveyValidation(), makeDbAddSurvey()))
}
