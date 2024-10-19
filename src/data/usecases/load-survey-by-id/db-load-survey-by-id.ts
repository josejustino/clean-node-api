import { type LoadSurveyByIdRepository } from '@/data/protocols/db/survey'
import { type SurveyModel } from '@/domain/models'
import { type LoadSurveyById } from '@/domain/usecases'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadById (id: string): Promise<SurveyModel> {
    await this.loadSurveyByIdRepository.loadById(id)
    return null
  }
}
