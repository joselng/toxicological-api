
import { Router } from 'express'

import sampleController from './sample.routes'

const routes = Router()

routes.use('/samples', sampleController)

export default routes
