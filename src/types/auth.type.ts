import { User } from './user.type'
import { SuccesResponse } from './utils.type'

export type AuthResponse = SuccesResponse<{
  access_token: string
  expires: string
  user: User
}>
