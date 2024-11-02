import { type AddSurveyModel } from '@/domain/usecases/survey'

export interface AddSurveyRepository {
  add: (surveyData: AddSurveyModel) => Promise<void>
}
