// import css from './Table.module.css'

import { RangeI } from '../../utils/interfaces/match.interface'
import Chip, { ChipColor, ChipType } from '../Chip/Chip'

// type CellTable = {
//   label: string
//   type: string
// }
// type TableProps<T> = {
//   header: CellTable[]
//   data: T[]
// }
// function Table<T>({ header, data }: TableProps<T>) {
//   return (
//     <section className={css.section}>
//       <table className={css.table}>
//         <thead className={css.thead}>
//           <tr>
//             {header.map((item, index) => (
//               <th className={css.th} key={index}>
//                 {item.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr className={css.tr} key={index}>
//               <td className={css.td}>{item['id']}</td>
//               <td className={css.td}>{item['date'].toISOString()}</td>
//               {/* <td className={css.td}>
//                 <p className={`${css.infoValue} ${css.good}`}>
//                   {item['victories']}
//                 </p>
//               </td>
//               <td className={css.td}>
//                 <p className={`${css.infoValue} ${css.default}`}>
//                   {item['defeats']}
//                 </p>
//               </td>
//               <td className={css.td}>{item.totalMatches}</td>
//               <td className={css.td}>
//                 <p className={`${css.infoValue} ${css.regular}`}>{item.diff}</p>
//               </td>
//               <td className={css.td}>
//                 <p className={`${css.infoValue} ${css.bad}`}>{item.acumDiff}</p>
//               </td>
//               <td className={css.td}>{item.playedTime}</td>
//               <td className={css.td}>{item.range.rankedTier.tierName}</td>
//               <td className={css.td}>{item.range.marks}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   )
// }
// export default Table
import css from './Table.module.css'
interface TableProps {
  data: Array<{ [key: string]: string | number | boolean | RangeI }>
  cellType: Array<{ label: string; color: ChipColor; type: ChipType }>
}
const Table = ({ data, cellType }: TableProps) => {
  if (data.length === 0) {
    return <div>No data available</div>
  }

  const headers = Object.keys(data[0])

  return (
    <>
      <section className={css.section}>
        <table className={css.table}>
          <thead className={css.thead}>
            <tr>
              {headers.map((header) => (
                <th key={header} className={css.th}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={css.tr}>
                {headers.map((header, index) => (
                  <td key={header} className={css.td}>
                    <Chip
                      color={cellType[index].color}
                      value={row[header]}
                      type={cellType[index].type}
                    />
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
