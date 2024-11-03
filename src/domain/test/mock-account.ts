import { type AccountModel } from '../models'
import { type AuthenticationParams, type AddAccountParams } from '../usecases/account'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => ({ ...mockAddAccountParams(), id: 'any_id' })

export const mockAuthentication = (): AuthenticationParams => (
  {
    email: 'any_email@mail.com',
    password: 'any_password'
  }
)
