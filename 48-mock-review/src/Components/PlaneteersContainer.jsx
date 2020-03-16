import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (propsObj) => {

  let {planeteers} = propsObj

  let arrayOfComponents = planeteers.map((planeteer) => {
    return <Planeteer key={planeteer.id} planeteer={planeteer}/>
  })

  return (
    <ul className="cards">
      {
        arrayOfComponents
      }
    </ul>
  )

};

export default PlaneteersContainer;
