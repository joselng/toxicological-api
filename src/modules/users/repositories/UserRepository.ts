import { getRepository, Repository } from 'typeorm'

import { IUserRepository } from './IUserRepository'
import { User } from '../entities/User'
import { UserDTO } from '../dtos/UserDTO'

export class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor () {
    this.ormRepository = getRepository(User)
  }

  public async create ({ name, email, password }: UserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name, email, password
    })

    return this.ormRepository.save(user)
  }

  public async findById (id: number): Promise<User> {
    return this.ormRepository.findOne(id)
  }

  public async findByEmail (email: string): Promise<User> {
    return this.ormRepository.findOne({ where: { email } })
  }

  public async save (user: User): Promise<User> {
    return this.ormRepository.save(user)
  }
}
