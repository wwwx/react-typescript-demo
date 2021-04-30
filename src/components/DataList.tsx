import React from 'react'
interface DataListProps {
  isOrdered?: boolean;
  data: string[];
}

const DataList: React.FC<DataListProps> = (props) => {
    
  const list = props.data.map((item, i) => <li key={i}>{item}</li>) 
  return props.isOrdered ? <ol>{list}</ol> : <ul>{list}</ul>
}

export default DataList