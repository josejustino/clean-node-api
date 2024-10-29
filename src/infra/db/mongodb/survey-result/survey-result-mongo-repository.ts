import { type SaveSurveyResultRepository } from '@/data/protocols/db/survey-result'
import { type SurveyResultModel } from '@/domain/models'
import { type SaveSurveyResultModel } from '@/domain/usecases/survey-result'
import { MongoHelper } from '../helpers'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    const res = await surveyResultCollection.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      upsert: true,
      returnDocument: 'after'
    })
    return res && MongoHelper.map(res.value)
  }
}
