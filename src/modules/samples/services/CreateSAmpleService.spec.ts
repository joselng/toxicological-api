import { AppError } from '../../../app/errors/AppError'
import { FakeSampleRepository } from '../repositories/FakeSampleRepository'
import { CreateSampleService } from './CreateSampleService'
import { Sample } from '../entities/Sample'

let sampleRepository: FakeSampleRepository
let createSample: CreateSampleService

describe('CreateSample', () => {
  beforeEach(() => {
    sampleRepository = new FakeSampleRepository()
    createSample = new CreateSampleService(sampleRepository)
  })
  it('should create a sample.', async () => {
    const sample = await createSample.execute({
      code: '55763248',
      cocaine: 0.95,
      amphetamine: 1.2,
      methamphetamine: 0.6,
      mda: 2,
      mdma: 0.7,
      thc: 0,
      morphine: 0,
      codeine: 0,
      heroin: 0,
      benzoylecgonine: 0.05,
      cocaethylene: 0,
      norcocaine: 0
    })

    expect(sample).toBeInstanceOf(Sample)
  })

  it('should not be able to create two samples with the same code.', async () => {
    await createSample.execute({
      code: '12345678',
      cocaine: 0.95,
      amphetamine: 1.2,
      methamphetamine: 0.6,
      mda: 2,
      mdma: 0.7,
      thc: 0,
      morphine: 0,
      codeine: 0,
      heroin: 0,
      benzoylecgonine: 0.05,
      cocaethylene: 0,
      norcocaine: 0
    })

    await expect(
      createSample.execute({
        code: '12345678',
        cocaine: 0.95,
        amphetamine: 1.2,
        methamphetamine: 0.6,
        mda: 2,
        mdma: 0.7,
        thc: 0,
        morphine: 0,
        codeine: 0,
        heroin: 0,
        benzoylecgonine: 0.05,
        cocaethylene: 0,
        norcocaine: 0
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
