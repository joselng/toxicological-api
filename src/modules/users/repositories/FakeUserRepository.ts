import { IUserRepository } from './IUserRepository'
import { User } from '../entities/User'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

export class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  constructor () {
    this.users = []
  }

  public async create ({ name, email, password }: CreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      id: Number(this.users.length + 1),
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null
    })

    this.users.push(user)

    return user
  }

  public async findById (id: number): Promise<User> {
    return this.users.find(user => user.id === id)
  }

  public async findByEmail (email: string): Promise<User> {
    return this.users.find(user => user.email === email)
  }

  public async save (user: User): Promise<User> {
    this.users.push(user)
    return user
  }
}
