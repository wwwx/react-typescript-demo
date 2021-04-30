import React from 'react'
import { Dictionary } from '../common.model'

interface MappedTableProps {
  data: Dictionary[];
  propertyNames: string[];
}

const MappedTable: React.FC<MappedTableProps> = (props) => {
  const filteredData = props.data.map(item => {
      return Object.keys(item)
          .filter(c => props.propertyNames.includes(c))
          .reduce((acc, cur) => {
              acc[cur] = item[cur]
              return acc

          }, {} as Dictionary)
  })

  return <>
    <table>
      <thead>
        <tr>{ props.propertyNames.map((item, i) => <td key={i}>{ item }</td>) }</tr>
      </thead>
      <tbody>{filteredData.map((value, i) => (
        <tr key={i}>
          {props.propertyNames.map((c, j) => (
            <td key={j}>{value[c]}</td>
          ))}
        </tr>
      ))}</tbody>
    </table>
  </>    
}

export default MappedTable