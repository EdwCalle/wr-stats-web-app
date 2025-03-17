import { z } from 'zod'

export const matchSchema = z.object({
  tierName: z.string().min(6, {
    message: 'username must have at least 6 characters',
  }),
  divisionLvl: z.number().min(1),
  marks: z.number().min(0),
  victories: z.number().min(0),
  defeats: z.number().min(0),
})
export type MatchValues = z.infer<typeof matchSchema>
//TO DO
// reinforce validations
