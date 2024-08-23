import { type LoadAccountByToken } from '../../domain/usecases'
import { AccessDeniedError } from '../errors'
import { forbidden, ok } from '../helpers/http'
import { type HttpRequest, type HttpResponse, type Middleware } from '../protocols'

export class AuthMiddleware implements Middleware {
  constructor (private readonly loadAccountByToken: LoadAccountByToken) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken)
      if (account) {
        return ok({
          accountId: account.id
        })
      }
    }
    return forbidden(new AccessDeniedError())
  }
}
