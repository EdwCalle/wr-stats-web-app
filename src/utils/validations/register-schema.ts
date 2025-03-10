import { z } from 'zod'

export const registerSchema = z.object({
  username: z.string().min(6, {
    message: 'username must have at least 6 characters loasdas dkasd lkasjdkl ',
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: 'password must have at least 6 characters' }),
  confirmPassword: z
    .string()
    .min(6, { message: 'password must have at least 6 characters' }),
})
export type RegisterValues = z.infer<typeof registerSchema>
