import { adaptMiddleware } from '../adapters'
import { makeAuthMiddleware } from '../factories/middlewares'

export const auth = adaptMiddleware(makeAuthMiddleware())
