export const handleShowModal = (id: string): void => {
  const modal = document.getElementById(id) as HTMLDialogElement | null
  modal?.showModal()
}
export const handleCloseModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement | null
  modal?.close()
}
export const getRange = (data) => {
  // if (!data) return { tier: 's/n', division: 's/n', marks: 's/n' }
  const { rankedTier, points } = data
  if (!rankedTier || rankedTier === null)
    return { tier: 's/n', division: 's/n', marks: 's/n' }
  const ranges = rankedTier.split(' ')
  // console.log(ranges)
  const marks = points || 's/n'
  // if (!rankedTier) return { tier: 's/n', division: 's/n', marks: marks }
  if (ranges.length === 2)
    return { tier: ranges[0], division: ranges[1], marks: marks }
  if (ranges.length === 1)
    return { tier: ranges[0], division: 's/n', marks: marks }
  else return { tier: 's/n', division: 's/n', marks: marks }
}
