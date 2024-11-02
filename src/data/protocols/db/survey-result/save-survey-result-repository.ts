import { type SurveyResultModel } from '@/domain/models'
import { type SaveSurveyResultModel } from '@/domain/usecases/survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultModel) => Promise<SurveyResultModel>
}
