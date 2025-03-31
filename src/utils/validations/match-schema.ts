import { z } from 'zod'

export const matchSchema = z.object({
  date: z.date(),
  victories: z.number().min(0),
  defeats: z.number().min(0),
  seasonProfileID: z.string().min(5),
  // tierName: z.string().min(6, {
  //   message: 'username must have at least 6 characters',
  // }),
  rankedTierID: z.string().min(6),
  divisionLvl: z.number().min(1),
  marks: z.number().min(0),
})
export type MatchValues = z.infer<typeof matchSchema>
//TO DO
// reinforce validations
