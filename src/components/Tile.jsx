import React from 'react'
import PropTypes from 'prop-types'


export default function Tile(props){

  const mainDivStyle = {
    display: 'inline-block',
    flexGrow: '1',
    width: 'calc(100% * (1/3) - 10px - 1px)',
    textAlign: 'center'
  }
  const imageStyles = {
    width: '95%',
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
