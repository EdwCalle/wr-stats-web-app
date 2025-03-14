export interface Stats {
  playedTime: number
  totalMatches: number
  diff: number
  acumDiff: number
}
export const getStats = (
  lastAccumDiff: number,
  victories: number,
  defats: number,
): Stats => {
  const totalMatches = victories + Math.abs(defats)
  const playedTime = totalMatches * 20
  const diff = victories - defats
  const acumDiff = diff + lastAccumDiff
  return { playedTime, totalMatches, diff, acumDiff }
}
