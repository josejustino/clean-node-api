import { type SurveyModel } from '@/domain/models'

export interface LoadSurveys {
  load: () => Promise<SurveyModel[] | null>
}
