import React from 'react'
import Tile from './Tile'
import crowSkull from './../crowSkull.jpg'

const artCollection = [
  {
    title: 'crow skull',
    image: crowSkull
  },
  {
    title: 'crow skull2',
    image: crowSkull
  },
  {
    title: 'crow skull3',
    image: crowSkull
  },
]

export default function Gallery(){

  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }


  return (
    <div style={mainDivStyle}>
      {artCollection.map((tile, index) =>
        <Tile title={tile.title}
          image={tile.image}
          key={index} />
      )}
    </div>
  )
}
