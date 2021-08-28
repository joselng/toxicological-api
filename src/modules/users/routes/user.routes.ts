import { Router } from 'express'

import { UserController } from '../controllers/UserController'
import { ValidateUserPayload } from '../validators/UserPayload'

const routes = Router()
const userController = new UserController()

routes.post('/', ValidateUserPayload, userController.create)

export default routes
