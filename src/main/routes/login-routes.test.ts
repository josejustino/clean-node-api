import request from 'supertest'
import { hash } from 'bcrypt'
import { type Collection } from 'mongodb'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import env from '../config/env'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'José',
          email: 'jose.justinno@gmail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: 'José',
          email: 'jose.justinno@gmail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(403)
    })
  })

  describe('POST /signin', () => {
    test('Should return 200 on signin', async () => {
      const password = await hash('123456', 12)
      await accountCollection.insertOne({
        name: 'José',
        email: 'jose.justinno@gmail.com',
        password
      })
      await request(app)
        .post('/api/signin')
        .send({
          email: 'jose.justinno@gmail.com',
          password: '123456'
        })
        .expect(200)
    })

    test('Should return 401 on signin', async () => {
      await request(app)
        .post('/api/signin')
        .send({
          email: 'jose.justinno@gmail.com',
          password: '123456'
        })
        .expect(401)
    })
  })
})
