import { type LoadSurveyById } from '@/domain/usecases/survey'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers/http'
import { type Controller, type HttpRequest, type HttpResponse } from '@/presentation/protocols'

export class SaveSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest<LoadSurveyById.Params>): Promise<HttpResponse> {
    try {
      const survey = await this.loadSurveyById.loadById({ surveyId: httpRequest.params.surveyId })
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
