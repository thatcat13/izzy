import React from 'react'
import izzy from './../assets/images/izzyBW.jpg'
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
    marginTop: '10',
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
        <h2 id='test'>portfolio</h2>
        <h2>shop</h2>
        <h2>about</h2>
        <h2>contact</h2>
      </div>
    </div>
  )
}
