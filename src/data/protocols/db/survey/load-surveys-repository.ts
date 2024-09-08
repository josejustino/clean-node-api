import { type SurveyModel } from '../../../../domain/models'

export interface LoadSurveysRepository {
  loadAll: () => Promise<SurveyModel[]>
}
