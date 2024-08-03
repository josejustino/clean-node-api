import { LogMongoRepository } from '../../../infra/db/mongodb/log'
import { type Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators/log'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
