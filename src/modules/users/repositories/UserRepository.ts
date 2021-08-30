import { getRepository, Repository } from 'typeorm'

import { IUserRepository } from './IUserRepository'
import { User } from '../entities/User'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor () {
    this.userRepository = getRepository(User)
  }

  public async create ({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = this.userRepository.create({
      name, email, password
    })

    return this.userRepository.save(user)
  }

  public async findById (id: number): Promise<User> {
    return this.userRepository.findOne(id)
  }

  public async findByEmail (email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } })
  }

  public async save (user: User): Promise<User> {
    return this.userRepository.save(user)
  }
}
