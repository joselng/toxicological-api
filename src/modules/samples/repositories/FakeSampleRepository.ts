import { ISampleRepository } from './ISampleRepository'
import { Sample } from '../entities/Sample'
import { CreateSampleDTO } from '../dtos/CreateSampleDTO'

export class FakeSampleRepository implements ISampleRepository {
  private samples: Sample[] = [];

  constructor () {
    this.samples = []
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
  }: CreateSampleDTO): Promise<Sample> {
    const sample = new Sample()

    Object.assign(sample, {
      id: Number(this.samples.length + 1),
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
      norcocaine,
      created_at: new Date()
    })

    this.samples.push(sample)

    return sample
  }

  public async getAll (): Promise<Sample[]> {
    return this.samples
  }

  public async findByCode (code: string): Promise<Sample> {
    return this.samples.find(sample => sample.code === code)
  }

  public async save (sample: Sample): Promise<Sample> {
    this.samples.push(sample)

    return sample
  }
}
