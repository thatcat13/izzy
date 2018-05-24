import React from 'react'
import PropTypes from 'prop-types'


export default function Tile(props){

  const mainDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const imageStyles = {
    width: '90%'
  }

  return (
    <div style={mainDivStyle} >
      <img style={imageStyles} src={props.image}/>
      <h3>{props.title}</h3>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object
}
