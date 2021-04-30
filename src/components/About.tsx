import React from 'react'
import DataList from './DataList'
import DataTable from './DataTable'
import MappedTable from './MappedTable'
import Tooltip from './Tooltip'

const AboutTooltip = () => {
  return (
    <>
      <h3>Tooltip</h3>
      <Tooltip content={`tooltip is open`}>
        <button>mouse enter</button>
      </Tooltip>
    </>
  )
}

const AboutDataList = () => {
  const names = [ 'John', 'Paul', 'Mario' ]
  return (
    <>
      <h3>Datalist</h3>
      {<DataList data={names} />}
      {<DataList data={names} isOrdered />}
    </>
  )
}

const AboutDataTable = () => {
  const people = [ 'John', 'Paul', 'Mario' ]
  return (
    <>
      <h3>DataTabble</h3>
      <DataTable data={people} />
    </>
  )
}

const AboutMappedTable = () => {
  const manyPeople = [
    {name: 'John', surname: 'Smith', age: 13},
    {name: 'Adam', surname: 'Smith', age: 25},
  ]
  const propertyNames = ['name', 'surname', 'age']
  return (
    <>
      <h3>MappedTable</h3>
      {<MappedTable data={manyPeople} propertyNames={propertyNames}/>}
    </>
  )
}



const About = () => {
  return (
    <div>
      <AboutTooltip />
      <AboutMappedTable />
      <AboutDataTable />
      <AboutDataList />
    </div>
  )
}
export default About
