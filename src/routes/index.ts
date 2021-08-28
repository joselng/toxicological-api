import { Router } from 'express'

import usersRoutes from '../modules/users/routes'
import samplesRoutes from '../modules/samples/routes'

const routes = Router()

routes.use(usersRoutes)
routes.use(samplesRoutes)

export default routes
