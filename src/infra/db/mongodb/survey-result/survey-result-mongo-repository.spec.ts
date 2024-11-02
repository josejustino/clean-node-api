import { type Collection } from 'mongodb'
import { MongoHelper } from '@/infra/db/mongodb/helpers'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'
import env from '@/main/config/env'
import { type SurveyModel } from '@/domain/models'

let surveyCollection: Collection
let surveyResultCollection: Collection
let accountCollection: Collection

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

const makeSurvey = async (): Promise<SurveyModel> => {
  const res = await surveyCollection.insertOne({
    question: 'any_question',
    answers: [{
      image: 'any_image',
      answer: 'any_answer'
    },
    {
      answer: 'other_answer'
    }],
    date: new Date()
  })
  const surveyResult = await surveyCollection.findOne({ _id: res.insertedId }) as unknown as SurveyModel
  return surveyResult
}

const makeAccountId = async (): Promise<string> => {
  const result = await surveyCollection.insertOne({
    name: 'any_name',
    email: 'any_email@mail.com',
    password: 'any_password'
  })
  return result.insertedId.toHexString()
}

describe('Account MongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.deleteMany({})
    surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    await surveyResultCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('save()', () => {
    test('Should add a survey result if its new', async () => {
      const survey = await makeSurvey()
      const accountId = await makeAccountId()
      const sut = makeSut()
      const surveyResult = await sut.save({
        surveyId: survey.id,
        accountId,
        answer: survey.answers[0].answer,
        date: new Date()
      })
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.id).toBeTruthy()
      expect(surveyResult.answer).toBe(survey.answers[0].answer)
    })

    test('Should update survey result if its not new', async () => {
      const survey = await makeSurvey()
      const accountId = await makeAccountId()
      const res = await surveyResultCollection.insertOne({
        surveyId: survey.id,
        accountId,
        answer: survey.answers[0].answer,
        date: new Date()
      })
      const sut = makeSut()
      const surveyResult = await sut.save({
        surveyId: survey.id,
        accountId,
        answer: survey.answers[1].answer,
        date: new Date()
      })
      expect(surveyResult).toBeTruthy()
      expect(surveyResult.id).toEqual(res.insertedId.toHexString())
      expect(surveyResult.answer).toBe(survey.answers[1].answer)
    })
  })
})
