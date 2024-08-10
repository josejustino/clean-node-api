import { type AddSurvey } from '../../../../domain/usecases'
import { badRequest } from '../../../helpers/http'
import { type Validation, type Controller, type HttpRequest, type HttpResponse } from '../../../protocols'

export class AddSurveyController implements Controller {
  constructor (private readonly validation: Validation, private readonly addSurvey: AddSurvey) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    const { question, answers } = httpRequest.body
    await this.addSurvey.add({
      question,
      answers
    })
    return await Promise.resolve(null)
  }
}
