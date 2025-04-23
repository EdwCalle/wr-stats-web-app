import { useState } from 'react'
export interface Interval {
  page?: number
  limit: number
  total: number
}
const usePagination = ({ page = 1, limit, total }: Interval) => {
  const [currentPage, setCurrentPage] = useState(page)
  const start = (currentPage - 1) * limit
  const end = Math.min(currentPage * limit, total)
  const handleNext = () => {
    if (end < total) {
      setCurrentPage(currentPage + 1)
    }
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return { currentPage, start, end, handleNext, handlePrev }
}

export default usePagination
