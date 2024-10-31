import { type LoadSurveyByIdRepository } from '@/data/protocols/db/survey'
import { type SurveyModel } from '@/domain/models'
import { type LoadSurveyById } from '@/domain/usecases/survey'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadById (params: LoadSurveyById.Params): Promise<SurveyModel> {
    const survey = await this.loadSurveyByIdRepository.loadById(params.surveyId)
    return survey
  }
}
