import React from 'react'
import izzy from './../izzyEdit.jpg'
import './../assets/Header.css'

export default function Header(){

  const mainDivStyle = {
    display: 'flex',
    flexDirection: 'column'
  }
  const imgStyle = {
    borderRadius: '50%',
    marginTop: '10'
  }
  const imgDivStyle = {
    textAlign: 'center'
  }
  const linkStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20'
  }
  return (
    <div style={mainDivStyle}>
      <div style={imgDivStyle}>
        <img style={imgStyle} src={izzy} />
      </div>
      <div style={linkStyle}>
        <h2>portfolio</h2>
        <h2>about</h2>
        <h2>contact</h2>
      </div>
    </div>
  )
}
