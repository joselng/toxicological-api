import { Router } from 'express'

import { SampleController } from '../controllers/SampleController'
import { ValidateSamplePayload } from '../validators/SamplePayload'

const routes = Router()
const sampleController = new SampleController()

routes.post('/', ValidateSamplePayload, sampleController.create)

export default routes
