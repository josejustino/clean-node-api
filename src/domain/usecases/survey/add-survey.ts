import { type SurveyModel } from '@/domain/models'

export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}
