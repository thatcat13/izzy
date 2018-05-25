import React from 'react'
import PropTypes from 'prop-types'

// #efbffb = color for hover
export default function Tile(props){

  const mainDivStyle = {
    display: 'inline-block',
    flexGrow: '1',
    width: 'calc(100% * (1/3))',
    textAlign: 'center'
  }
  const imageStyles = {
    width: '99%',
    cursor: 'pointer'
  }

  return (
    <div style={mainDivStyle} >
      <img style={imageStyles} src={props.image}/>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object
}
