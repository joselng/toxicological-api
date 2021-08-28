import { Request, Response } from 'express'
import User, { IUser } from '../models/user.model'

export default class UserController {
  async create (request: Request, response: Response): Promise<Response<Omit<IUser, 'password'>>> {
    const { name, email, password } = request.body

    const verifyEmail = await User.find({
      email
    })

    if (verifyEmail.length > 0) {
      return response.json({ msg: 'Este email está em uso.' })
    }

    const user = await User.create({
      name, email, password
    })

    return response.json(user)
  }
}
