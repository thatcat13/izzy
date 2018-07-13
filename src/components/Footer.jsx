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
    fontSize: '2.75em'
  }


  return (
    <div style={mainDivStyle}>
      <div style={iconDivStyle}>
        <a style={{color:'#3c2856'}} href='mailto: jellybeanninja4035@gmail.com'><FontAwesomeIcon icon='envelope-square' /></a>
        <a style={{color:'#3c2856'}} href='https://www.instagram.com/oregon.thistle/' target="_blank"
          ><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
    </div>
  )
}
//
