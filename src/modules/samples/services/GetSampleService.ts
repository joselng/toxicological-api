import { ISampleRepository } from '../repositories/ISampleRepository'
import { AppError } from '../../../app/errors/AppError'

export class GetSampleService {
  private sampleRepository: ISampleRepository

  constructor (sampleRepository: ISampleRepository) {
    this.sampleRepository = sampleRepository
  }

  async execute (code: string) {
    const sample = await this.sampleRepository.findByCode(
      code
    )

    if (!sample) {
      throw new AppError('Não foi encontrada nenhuma amostra com o código informado.')
    }

    return sample
  }
}
