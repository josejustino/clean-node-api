import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { type EmailValidator, type HttpRequest, type HttpResponse } from '../../protocols'

export class LoginController {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse | undefined> {
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    if (!httpRequest.body.password) {
      return badRequest(new MissingParamError('password'))
    }

    this.emailValidator.isValid(httpRequest.body.email)
  }
}
