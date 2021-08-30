import { Router } from 'express'

import ensureAuthenticated from 'middlewares/ensureAuthenticated'

import { SampleController } from '../controllers/SampleController'
import { ValidateSamplePayload } from '../validators/SamplePayload'

const routes = Router()
const sampleController = new SampleController()

routes.use(ensureAuthenticated)

routes.post('/', ValidateSamplePayload, sampleController.create)
routes.get('/:code/details', sampleController.details)
routes.get('/:code', sampleController.show)
routes.get('/', sampleController.all)

export default routes
