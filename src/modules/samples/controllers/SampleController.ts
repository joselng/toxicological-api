import { Request, Response } from 'express'

import { SampleRepository } from '../repositories/SampleRepository'
import { CreateSampleService } from '../services/CreateSampleService'
import { DetailsSampleService } from '../services/DetailsSampleService'
import { GetAllSampleService } from '../services/GetAllSampleService'
import { GetSampleService } from '../services/GetSampleService'
import { AnalysisSampleService } from '../services/AnalysisSampleService'

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
  }

  async details (request: Request, response: Response): Promise<Response> {
    const { code } = request.params

    const detailsSampleService = new DetailsSampleService(
      new SampleRepository()
    )
    const analysisService = new AnalysisSampleService()

    const sample = await detailsSampleService.execute(code)

    const analysis = await analysisService.execute(sample)

    return response.status(200).json(analysis)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const { code } = request.params

    const getSampleService = new GetSampleService(
      new SampleRepository()
    )
    const analysisService = new AnalysisSampleService()

    const sample = await getSampleService.execute(code)

    const analysis = await analysisService.execute(sample)

    for (const item of analysis) {
      if (item.result === 'positive') {
        return response.status(200).json({ code: sample.code, result: 'positive' })
      }
    }

    return response.status(200).json({ code: sample.code, result: 'negative' })
  }

  async all (request: Request, response: Response): Promise<Response> {
    const getAllSampleService = new GetAllSampleService(
      new SampleRepository()
    )

    const samples = await getAllSampleService.execute()

    return response.status(200).json(samples)
  }
}
