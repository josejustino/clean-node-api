import { type SurveyModel } from '../../../domain/models'
import { type LoadSurveys } from '../../../domain/usecases'
import { type LoadSurveysRepository } from '../../protocols/db/survey'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[] | null> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
