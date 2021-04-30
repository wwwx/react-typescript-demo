import React from 'react'

const DataTable: React.FC<{ data: string[] }> = (props) => {
  return <>
    <table>
      <thead>
        <tr>
          <th align="left">ID</th>
          <th align="left">Name</th>
        </tr>
      </thead>
      <tbody>{props.data.map((item, i) => (
        <tr key={i}>
          <td>{i}</td>
          <td>{item}</td>
        </tr>
      ))}</tbody>
    </table>
  </>
}


export default DataTable