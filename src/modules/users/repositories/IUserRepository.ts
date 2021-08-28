import { User } from '../entities/User'
import { UserDTO } from '../dtos/UserDTO'

export interface IUserRepository {
  create(data: UserDTO): Promise<User>
  findById(id: number): Promise<User>
  findByEmail(email: string): Promise<User>
  save(data: User): Promise<User>
}
