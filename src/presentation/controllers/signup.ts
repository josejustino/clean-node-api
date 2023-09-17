import { type HttpRequest, type HttpResponse } from '../protocols/http'
import { MissingParamError } from '../Errors/missing-param-error'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
