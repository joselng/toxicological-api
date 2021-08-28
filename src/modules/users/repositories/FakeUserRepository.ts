import { IUserRepository } from './IUserRepository'
import { User } from '../entities/User'
import { UserDTO } from '../dtos/UserDTO'

export class FakeUserRepository implements IUserRepository {
  private repository: User[] = [];

  public async create ({ name, email, password }: UserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      id: Number(this.repository.length + 1),
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    })

    this.repository.push(user)

    return user
  }

  public async findById (id: number): Promise<User> {
    return this.repository.find(user => user.id === id)
  }

  public async findByEmail (email: string): Promise<User> {
    return this.repository.find(user => user.email === email)
  }

  public async save (user: User): Promise<User> {
    this.repository.push(user)
    return user
  }
}
