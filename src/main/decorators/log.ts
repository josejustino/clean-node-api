import { type HttpRequest, type Controller } from '../../presentation/protocols'

export class LogControllerDecorator {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (httpRequest: HttpRequest): Promise<void> {
    await this.controller.handle(httpRequest)
  }
}
