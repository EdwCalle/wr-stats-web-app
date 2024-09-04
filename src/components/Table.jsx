import css from '../css/Table.module.css'
function Table({ header, data }) {
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
          {data.map((value, index) => (
            <tr className={css.tr} key={index}>
              <td className={css.td}>{value['ID']}</td>
              <td className={css.td}>{value['date']}</td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.good}`}>
                  {value['Victorias']}
                </p>
              </td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.default}`}>
                  {value['Derrotas']}
                </p>
              </td>
              <td className={css.td}>{value['total_matchs']}</td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.regular}`}>
                  {value['diff']}
                </p>
              </td>
              <td className={css.td}>
                <p className={`${css.infoValue} ${css.bad}`}>
                  {value['acumDiff']}
                </p>
              </td>
              <td className={css.td}>{value['playedTime']}</td>
              <td className={css.td}>{value['Rango']}</td>
              <td className={css.td}>{value['Puntos']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
export default Table
