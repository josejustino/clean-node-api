import { type SurveyResultModel } from '@/domain/models'
import { type SaveSurveyResultModel } from '@/domain/usecases'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultModel) => Promise<SurveyResultModel>
}
