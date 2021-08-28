import { Request, Response } from 'express'

import { CreateSampleService } from '../services/CreateSampleService'
import { SampleRepository } from '../repositories/SampleRepository'

export class SampleController {
  async create (request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body

    try {
      const createSample = new CreateSampleService(
        new SampleRepository()
      )

      const sample = await createSample.execute({
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

      return response.status(201).json(sample)
    } catch (err) {
      throw Error(err)
    }
  }
}
