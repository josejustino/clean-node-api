import { type SaveSurveyResultParams } from '@/domain/usecases/survey-result'
import { type SurveyResultModel } from '@/domain/models'

export const mockSaveSurveyResultParams = (): SaveSurveyResultParams => ({
  accountId: 'any_account_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSurveyResultModel = (): SurveyResultModel => Object.assign({}, mockSaveSurveyResultParams(), {
  id: 'any_id'
})
