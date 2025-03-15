export interface Stats {
  playedTime: number
  totalMatches: number
  diff: number
  acumDiff: number
}
export const getStats = (
  lastAccumDiff: number,
  victories: number,
  defeats: number,
): Stats => {
  const totalMatches = victories + Math.abs(defeats)
  const playedTime = totalMatches * 20
  const diff = victories - defeats
  const acumDiff = diff + lastAccumDiff
  return { playedTime, totalMatches, diff, acumDiff }
}
