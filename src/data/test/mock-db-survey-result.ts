import { type SaveSurveyResultParams } from '@/domain/usecases/survey-result'
import { type SaveSurveyResultRepository } from '../protocols/db/survey-result'
import { type SurveyResultModel } from '@/domain/models'
import { mockSurveyResultModel } from '@/domain/test'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
