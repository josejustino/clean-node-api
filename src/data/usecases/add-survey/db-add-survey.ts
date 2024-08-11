import { type AddSurveyModel, type AddSurvey } from '../../../domain/usecases'
import { type AddSurveyRepository } from '../../protocols/db/survey'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}
  async add (data: AddSurveyModel): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}
