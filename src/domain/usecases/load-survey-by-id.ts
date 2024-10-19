import { type SurveyModel } from '@/domain/models'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<SurveyModel>
}
