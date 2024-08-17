import { type AddSurveyRepository } from '../../../../data/protocols/db/survey'
import { type AddSurveyModel } from '../../../../domain/usecases'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }
}
