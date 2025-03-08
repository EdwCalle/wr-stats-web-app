import { Match } from '../../../../utils/interfaces/match.interface'
import css from './MatchTable.module.css'
type TableProps = {
  header: string[]
  matches: Match[]
}
function Table({ header, matches }: TableProps) {
  return (
    <section className={css.section}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            {header.map((value, index) => (
              <th className={css.th} key={index}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matches.map((value, index) => (
            <tr className={css.tr} key={index}>
              <td className={css.td}>{value['id']}</td>
              <td className={css.td}>{value['date'].toISOString()}</td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.good}`}>
                  {value['victories']}
                </p>
              </td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.default}`}>
                  {value['defeats']}
                </p>
              </td>
              <td className={css.td}>{value.totalMatches}</td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.regular}`}>
                  {value.diff}
                </p>
              </td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.bad}`}>
                  {value.acumDiff}
                </p>
              </td>
              <td className={css.td}>{value.playedTime}</td>
              <td className={css.td}>{value.range.rankedTier.tierName}</td>
              <td className={css.td}>{value.range.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
export default Table
