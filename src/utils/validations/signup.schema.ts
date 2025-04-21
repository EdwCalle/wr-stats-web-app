import { z } from 'zod'

export const signupSchema = z
  .object({
    username: z.string().min(6, {
      message: 'username must have at least 6 characters',
    }),
    email: z.string().email(),
    password: z
      .string()
      .min(6, { message: 'password must have at least 6 characters' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'password must have at least 6 characters' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
export type SignupValues = z.infer<typeof signupSchema>
//TO DO
// reinforce validations
