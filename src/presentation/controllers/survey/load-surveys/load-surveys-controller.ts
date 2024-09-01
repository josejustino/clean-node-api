import { ok } from './../../../helpers/http'
import { type LoadSurveys } from '../../../../domain/usecases'
import { type Controller, type HttpRequest, type HttpResponse } from '../../../protocols'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const surveys = await this.loadSurveys.load()
    return ok(surveys)
  }
}
