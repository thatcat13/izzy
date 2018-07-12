import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import insta from './../assets/insta.svg'

export default function Footer(){

  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

  const iconDivStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    color: '#3c2856',
    width: '13%',
    fontSize: '3em'
  }


  return (
    <div style={mainDivStyle}>
      <div style={iconDivStyle}>
        <FontAwesomeIcon icon='envelope' />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </div>
    </div>
  )
}
//
