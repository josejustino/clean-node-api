import { AuthMiddleware } from '@/presentation/middlewares'
import { type Middleware } from '@/presentation/protocols'
import { makeDbLoadAccountByToken } from '@/main/factories/usecases/account'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
