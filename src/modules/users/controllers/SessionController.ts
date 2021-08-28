import { Request, Response } from 'express'

import { AuthenticateUserService } from '../services/AuthenticateUserService'
import { UserRepository } from '../repositories/UserRepository'

export class SessionController {
  async create (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const authenticateService = new AuthenticateUserService(
      new UserRepository()
    )

    const user = await authenticateService.execute({ email, password })

    return response.json(user)
  }
}
