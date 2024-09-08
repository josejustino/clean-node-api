import { adaptMiddleware } from '../adapters'
import { makeAuthMiddleware } from '../factories/middlewares'

export const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
