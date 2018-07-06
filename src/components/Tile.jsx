import React from 'react'
import PropTypes from 'prop-types'
import './../assets/Tile.css'


// hover color: #b388a5
export default function Tile(props){

  return (
    <div id='main-div'>
      <div id='tile-div'>
        <a href='#'><img id='tile-img' src={props.image}/></a>
        <h1 id='tile-title' href='#'>{props.title}</h1>
      </div>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object
}
