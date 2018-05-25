import React from 'react'
import Tile from './Tile'
import crow from './../crowSkull3.jpg'
import couch from './../couch.png'
import crane from './../crane2.png'
import duckie from './../duckie2.png'
import fishies from './../fishies.png'
import goddess from './../goddess.png'
import green from './../green.png'
import loveIsLove from './../loveIsLove.png'
import tea from './../tea.png'

const artCollection = [
  {
    title: 'crane',
    image: crane
  },
  {
    title: 'crow',
    image: crow
  },
  {
    title: 'duckie',
    image: duckie
  },
  {
    title: 'couch',
    image: couch
  },
  {
    title: 'love is love',
    image: loveIsLove
  },
  {
    title: 'tea',
    image: tea
  },
  {
    title: 'fishies',
    image: fishies
  },
  {
    title: 'goddess',
    image: goddess
  },
  {
    title: 'green',
    image: green
  },
]

export default function Gallery(){

  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginLeft: '10',
    marginRight: '10'
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
