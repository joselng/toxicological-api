import { User } from '../entities/User'
import { CreateUserDTO } from '../dtos/CreateUserDTO'

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>
  findById(id: number): Promise<User>
  findByEmail(email: string): Promise<User>
  save(data: User): Promise<User>
}
