import { z } from 'zod'
const strongPasswordSchema = z
  .string()
  .min(8)
  .refine((value) => /[a-z]/.test(value), {
    message: 'Password must contain at least one lowercase letter',
  })
  .refine((value) => /[A-Z]/.test(value), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine((value) => /[0-9]/.test(value), {
    message: 'Password must contain at least one number',
  })
  .refine((value) => /[^\w\s]/.test(value), {
    message: 'Password must contain at least one symbol',
  })
export const signupSchema = z
  .object({
    username: z.string().min(6, {
      message: 'username must have at least 6 characters',
    }),
    email: z.string().email(),
    password: strongPasswordSchema,
    confirmPassword: strongPasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
export type SignupValues = z.infer<typeof signupSchema>
//TO DO
// reinforce validations
