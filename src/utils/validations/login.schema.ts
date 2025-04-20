import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(6, {
    message: 'username must have at least 6 characters loasdas dkasd lkasjdkl ',
  }),
  password: z
    .string()
    .min(6, { message: 'password must have at least 6 characters' }),
})
export type LoginValues = z.infer<typeof loginSchema>
