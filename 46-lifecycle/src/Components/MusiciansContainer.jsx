import React from 'react'
import MusicianCard from './MusicianCard'

const MusiciansContainer = (props) => {

  let arrayOfComponents = props.musicians.map((musicianPOJO, index, theOriginalArray) => {
    return <MusicianCard key={musicianPOJO.id}
      deleteOneMusician={props.deleteOneMusician}
      updateOneMusician={props.updateOneMusician}
      musicianObj={ musicianPOJO }
    />
  })

  return (
    <div>
      <h3>{props.title}</h3>
      { arrayOfComponents }
    </div>
  )
}

export default MusiciansContainer
