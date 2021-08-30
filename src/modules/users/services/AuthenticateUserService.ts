import { sign } from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'

import authConfig from '../../../app/config/auth'
import { AppError } from '../../../app/errors/AppError'
import { User } from '../entities/User'

import { IUserRepository } from '../repositories/IUserRepository'

interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

export class AuthenticateUserService {
  private userRepository: IUserRepository

  constructor (userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  public async execute ({ email, password }: Request): Promise<Response> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new AppError('Dados inválidos. Tente novamente!', 401)
    }

    const passwordMatched = await bcryptjs.compare(
      password,
      user.password
    )

    if (!passwordMatched) {
      throw new AppError('Dados inválidos. Tente novamente!', 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({ email: user.email, name: user.name }, secret, {
      subject: user.email,
      expiresIn
    })

    delete user.password
    delete user.createdAt
    delete user.updatedAt
    delete user.deletedAt

    return { user, token }
  }
}
