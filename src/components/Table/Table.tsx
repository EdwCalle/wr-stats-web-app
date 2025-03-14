import Chip, { ChipColor } from '../Chip/Chip'
import css from './Table.module.css'

interface cellType {
  propName: string
  color: ChipColor
}

interface TableProps {
  data: Array<{ [key: string]: string | number | boolean | null }>
  customCells: cellType[]
}

export function getCustomCells(params: object, cells: cellType[]) {
  const defaultHeaders = Object.keys(params)
  return defaultHeaders.map((item) => {
    const foundCell = cells.find(({ propName }) => propName === item)
    return {
      propName: item,
      color: foundCell?.color ?? ChipColor.default,
    }
  })
}
const Table = ({ data, customCells }: TableProps) => {
  if (data.length === 0) {
    return <div>No data available</div>
  }

  const headers = getCustomCells(data[0], customCells)

  return (
    <>
      <section className={css.section}>
        <table className={css.table}>
          <thead className={css.thead}>
            <tr>
              {headers.map((header) => (
                <th key={header.propName} className={css.th}>
                  {header.propName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={css.tr}>
                {headers.map((header) => (
                  <td key={header.propName} className={css.td}>
                    {header.color != ChipColor.default ? (
                      <Chip color={header.color} value={row[header.propName]} />
                    ) : (
                      <>{row[header.propName]} </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
export default Table
