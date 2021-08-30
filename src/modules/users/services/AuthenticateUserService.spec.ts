import { AppError } from '../../../app/errors/AppError'

import { FakeUserRepository } from '../repositories/FakeUserRepository'
import { AuthenticateUserService } from './AuthenticateUserService'
import { CreateUserService } from './CreateUserService'

let usersRepository: FakeUserRepository
let createUser: CreateUserService
let authenticateUser: AuthenticateUserService

describe('AuthenticateUser', () => {
  beforeEach(() => {
    usersRepository = new FakeUserRepository()
    createUser = new CreateUserService(usersRepository)
    authenticateUser = new AuthenticateUserService(
      usersRepository
    )
  })
  it('should be able to authenticate.', async () => {
    const user = await createUser.execute({
      name: 'José Garcia',
      email: 'jose.garcia@synvia.com',
      password: '123456'
    })

    const login = await authenticateUser.execute({
      email: 'jose.garcia@synvia.com',
      password: '123456'
    })

    expect(login).toHaveProperty('token')
    expect(login).toHaveProperty('user')
    expect(login.user).toEqual(user)
  })

  it('should not be able to authenticate with non existing user.', async () => {
    await createUser.execute({
      name: 'José Garcia',
      email: 'jose.garcia@synvia.com',
      password: '123456'
    })

    await expect(
      authenticateUser.execute({
        email: 'wrong@mail.com',
        password: '123456'
      })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to authenticate with non correct password.', async () => {
    await createUser.execute({
      name: 'José Garcia',
      email: 'jose.garcia@synvia.com',
      password: '123456'
    })

    await expect(
      authenticateUser.execute({
        email: 'jose.garcia@synvia.com',
        password: 'wrong-password'
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
