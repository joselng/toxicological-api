import { ISampleRepository } from '../repositories/ISampleRepository'
import { CreateSampleDTO } from '../dtos/CreateSampleDTO'

import { AppError } from '../../../app/errors/AppError'

export class CreateSampleService {
  private sampleRepository: ISampleRepository

  constructor (sampleRepository: ISampleRepository) {
    this.sampleRepository = sampleRepository
  }

  async execute ({
    code,
    cocaine,
    amphetamine,
    methamphetamine,
    mda,
    mdma,
    thc,
    morphine,
    codeine,
    heroin,
    benzoylecgonine,
    cocaethylene,
    norcocaine
  }: CreateSampleDTO) {
    const checkCodeSampleExists = await this.sampleRepository.findByCode(code)

    if (checkCodeSampleExists) {
      throw new AppError('Esta amostra já está cadastrada.')
    }

    const sample = {
      code,
      cocaine,
      amphetamine,
      methamphetamine,
      mda,
      mdma,
      thc,
      morphine,
      codeine,
      heroin,
      benzoylecgonine,
      cocaethylene,
      norcocaine
    }

    await this.sampleRepository.create(sample)

    return sample
  }
}
