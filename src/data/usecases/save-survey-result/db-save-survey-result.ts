import { type SaveSurveyResultRepository } from '@/data/protocols/db/survey'
import { type SurveyResultModel } from '@/domain/models'
import { type SaveSurveyResult, type SaveSurveyResultModel } from '@/domain/usecases'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (private readonly saveSurveyResultRepository: SaveSurveyResultRepository) {}

  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    await this.saveSurveyResultRepository.save(data)
    return null
  }
}
