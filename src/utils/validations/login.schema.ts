import { z } from 'zod'

export const loginSchema = z.object({
  credential: z.string().min(3, {
    message: 'username must have at least 3 characters',
  }),
  password: z
    .string()
    .min(6, { message: 'password must have at least 6 characters' }),
})
export type LoginValues = z.infer<typeof loginSchema>
