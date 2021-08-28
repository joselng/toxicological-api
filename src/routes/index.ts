import { Router } from 'express'

import UserController from '../controllers/user.controller'

const routes = Router()
const userController = new UserController()

routes.post('/users', userController.create)

export default routes
