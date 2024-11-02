import { type SurveyModel } from '@/domain/models'

export interface LoadSurveyById {
  loadById: (params: LoadSurveyById.Params) => Promise<SurveyModel>
}

export namespace LoadSurveyById {
  export type Params = {
    surveyId: string
  }
}
