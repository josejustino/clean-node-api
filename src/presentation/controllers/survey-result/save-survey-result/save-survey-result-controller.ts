import { type LoadSurveyById } from '@/domain/usecases/survey'
import { type Controller, type HttpRequest, type HttpResponse } from '@/presentation/protocols'

export class SaveSurveyResultController implements Controller {
  constructor (private readonly loadSurveyById: LoadSurveyById) {}

  async handle (httpRequest: HttpRequest<LoadSurveyById.Params>): Promise<HttpResponse> {
    await this.loadSurveyById.loadById({ surveyId: httpRequest.params.surveyId })
    return null
  }
}
