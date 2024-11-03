import { type SaveSurveyResultRepository } from '@/data/protocols/db/survey-result'
import { type SurveyResultModel } from '@/domain/models'
import { type SaveSurveyResult, type SaveSurveyResultParams } from '@/domain/usecases/survey-result'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultRepository: SaveSurveyResultRepository) {}

  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    const surveyResult = await this.saveSurveyResultRepository.save(data)
    return surveyResult
  }
}
