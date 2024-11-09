import { type AddSurveyParams, type AddSurvey } from '@/domain/usecases/survey'
import { type AddSurveyRepository } from '@/data/protocols/db/survey'

export class DbAddSurvey implements AddSurvey {
  constructor (private readonly addSurveyRepository: AddSurveyRepository) {}
  async add (data: AddSurveyParams): Promise<void> {
    await this.addSurveyRepository.add(data)
  }
}
