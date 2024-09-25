export const handleShowModal = (id) => {
  document.getElementById(id).showModal()
}
export const handleCloseModal = (id) => {
  document.getElementById(id).close()
}
export const getRange = (data) => {
  const { rankedTier, points } = data
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
