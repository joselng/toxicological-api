import bcryptjs from 'bcryptjs'
import { AppError } from '../../../app/errors/AppError'
import { User } from '../entities/User'
import { IUserRepository } from '../repositories/IUserRepository'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

export class CreateUserService {
  private userRepository: IUserRepository

  constructor (userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  public async execute ({ name, email, password }: CreateUserDTO): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email)

    if (checkUserExists) {
      throw new AppError('O endereço de email já está em uso.')
    }

    const hashedPassword = await bcryptjs.hash(password, 10)

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword
    })

    delete user.password

    return user
  }
}
