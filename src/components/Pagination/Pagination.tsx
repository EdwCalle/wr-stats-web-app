import Button from '@components/Button/Button'

interface PaginationProps {
  currentPage: number
  start: number
  end: number
  total: number
  onNextPage: () => void
  onPrevPage: () => void
}
function Pagination({
  currentPage,
  start,
  end,
  total,
  onPrevPage,
  onNextPage,
}: PaginationProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        flexDirection: 'row',
        padding: 10,
        fontSize: 12,
      }}
    >
      <span>{`${start} to ${end} of ${total} results`}</span>
      <Button handleClick={onPrevPage} disabled={currentPage === 1}>
        {'<'}
      </Button>
      <Button handleClick={onNextPage} disabled={end >= total}>
        {'>'}
      </Button>
    </div>
  )
}
export default Pagination
