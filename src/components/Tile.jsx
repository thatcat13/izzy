import React from 'react'
import PropTypes from 'prop-types'
import './../assets/Tile.css'


// hover color: #b388a5
export default function Tile(props){

  const mainDivStyle = {
    // display: 'inline-block',
    flexGrow: '1',
    width: 'calc(100% * (1/3))',
    textAlign: 'center'
  }
  const imageStyles = {
    width: '99%',
    cursor: 'pointer'
  }

  return (
    <div id='main-div' style={mainDivStyle} >
      <div id='tile-div'>
        <a href='#'><img id='tile-img' style={imageStyles} src={props.image}/></a>
        <h1 id='tile-title' href='#'>{props.title}</h1>
      </div>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object
}
