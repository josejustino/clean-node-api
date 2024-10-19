import { DbLoadSurveys } from '@/data/usecases/load-surveys'
import { type LoadSurveys } from '@/domain/usecases'
import { SurveyMongoRepository } from '@/infra/db/mongodb/survey'

export const makeDbLoadSurveys = (): LoadSurveys => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveys(surveyMongoRepository)
}
