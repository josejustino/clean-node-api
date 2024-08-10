import { type Validation, type Controller, type HttpRequest, type HttpResponse } from '../../../protocols'

export class AddSurveyController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return await Promise.resolve(null)
  }
}
