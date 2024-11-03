import { type SurveyResultModel } from '@/domain/models'
import { type SaveSurveyResultParams } from '@/domain/usecases/survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultParams) => Promise<SurveyResultModel>
}
