import { ISampleRepository } from '../repositories/ISampleRepository'
import { SampleDTO } from '../dtos/SampleDTO'
import { AppError } from 'app/errors/AppError'

export class FindByCodeSampleService {
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
  }: SampleDTO) {
    try {
      this.sampleRepository.create({
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
      })
    } catch (err) {
      console.log(err)
      throw new AppError('Ocorreu um erro ao cadastrar a amostra.')
    }
  }
}
