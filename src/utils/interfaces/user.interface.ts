import { Role } from '../enums/Role.enum'

export interface User {
  _id: string
  username?: string
  email: string
  role: Role
  timezone: string
}
