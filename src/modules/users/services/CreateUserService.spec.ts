import { AppError } from '../../../app/errors/AppError'
import { FakeUserRepository } from '../repositories/FakeUserRepository'
import { CreateUserService } from './CreateUserService'
import { User } from '../entities/User'

let userRepository: FakeUserRepository
let createUser: CreateUserService

describe('CreateUser', () => {
  beforeEach(() => {
    userRepository = new FakeUserRepository()
    createUser = new CreateUserService(userRepository)
  })
  it('should create a user.', async () => {
    const user = await createUser.execute({
      name: 'José Garcia',
      email: 'jose.garcia@synvia.com',
      password: '123456'
    })

    expect(user).toBeInstanceOf(User)
  })

  it('should not be able to create two users with the same email.', async () => {
    const email = 'jose.garcia@synvia.com'

    await createUser.execute({
      name: 'José Garcia',
      email,
      password: '123456'
    })

    await expect(
      createUser.execute({
        name: 'Vinicius RHTech',
        email,
        password: '123456'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
