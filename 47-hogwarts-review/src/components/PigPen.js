import React from 'react'
import PigCard from './PigCard'



const PigPen = (props) => {

  let arrayOfComponents = props.piggies.map((pig) => {
    return <PigCard key={pig.name} pig={pig} />
  })



  return (
    <div>
      <h2>Hello from PigPen</h2>
      { arrayOfComponents }
    </div>
  )
}

export default PigPen
