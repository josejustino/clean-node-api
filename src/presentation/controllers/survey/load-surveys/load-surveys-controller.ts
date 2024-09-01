import { type LoadSurveys } from '../../../../domain/usecases'
import { type Controller, type HttpRequest, type HttpResponse } from '../../../protocols'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveys.load()
    return null
  }
}
