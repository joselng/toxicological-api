import { Request, Response } from 'express'

import { CreateUserService } from '../services/CreateUserService'
import { UserRepository } from '../repositories/UserRepository'

export class UserController {
  async create (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      const createUser = new CreateUserService(
        new UserRepository()
      )

      const user = await createUser.execute({ name, email, password })

      return response.status(201).json(user)
    } catch (err) {
      throw Error(err)
    }
  }
}
