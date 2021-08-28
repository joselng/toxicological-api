import { getRepository, Repository } from 'typeorm'

import { ISampleRepository } from './ISampleRepository'
import { Sample } from '../entities/Sample'
import { SampleDTO } from '../dtos/SampleDTO'

export class SampleRepository implements ISampleRepository {
  private ormRepository: Repository<Sample>;

  constructor () {
    this.ormRepository = getRepository(Sample)
  }

  public async create ({
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
  }: SampleDTO): Promise<Sample> {
    const sample = this.ormRepository.create({
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

    return this.ormRepository.save(sample)
  }

  public async getAll (): Promise<Sample[]> {
    return this.ormRepository.find()
  }

  public async findByCode (code: string): Promise<Sample> {
    return this.ormRepository.findOne(code)
  }

  public async save (sample: Sample): Promise<Sample> {
    return this.ormRepository.save(sample)
  }
}
