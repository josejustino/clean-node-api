import { type AddAccount } from '../../../domain/usecases/add-account'
import { type Authentication } from '../../../domain/usecases/authentication'
import { badRequest, ok, serverError } from '../../helpers/http/http-helper'
import { type Controller, type HttpRequest, type HttpResponse, type Validation } from '../../protocols'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const account = await this.addAccount.add({
        name,
        email,
        password
      })
      await this.authentication.auth({
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
