import { type SurveyModel } from '@/domain/models'
import { type LoadSurveys } from '@/domain/usecases/survey'
import { type LoadSurveysRepository } from '@/data/protocols/db/survey'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[] | null> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
