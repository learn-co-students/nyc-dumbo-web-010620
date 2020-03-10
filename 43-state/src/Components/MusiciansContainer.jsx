import React from 'react'
import MusicianCard from './MusicianCard'

const MusiciansContainer = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <MusicianCard
        musician="Otha"
        instrument="Bassoon"
        title={props.title}
        number={5}
        boolean={true}
        functionDefinition={() => {}}
        array={ [1,2,3,4,5] }
        object={ {hello: "010620"} }
      />
      <MusicianCard musician="Eric" instrument="Trumbone"/>
      <MusicianCard musician="Leizl" instrument="Triangle"/>
      <MusicianCard musician="Turducken" instrument="Piano"/>
    </div>
  )
}

export default MusiciansContainer
