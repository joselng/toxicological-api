import { ISampleRepository } from '../repositories/ISampleRepository'
import { AppError } from '../../../app/errors/AppError'

export class GetAllSampleService {
  private sampleRepository: ISampleRepository

  constructor (sampleRepository: ISampleRepository) {
    this.sampleRepository = sampleRepository
  }

  async execute () {
    const samples = await this.sampleRepository.getAll()

    if (samples.length < 1) {
      throw new AppError('Não existem amostras cadastradas.')
    }

    return samples
  }
}
