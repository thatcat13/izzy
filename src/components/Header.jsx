import React from 'react'
import izzy from './../assets/images/izzyPurple2.jpg'
import './../assets/Header.css'
import { Link } from 'react-router-dom';

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
  const linkDivStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20'
  }

  const linkStyle = {
    textDecoration: 'none',
    fontSize: '2em',
  }

  const imgLinkStyle = {
    cursor: 'pointer'
  }

  return (
    <div style={mainDivStyle}>
      <div style={imgDivStyle}>
        <a href='/' style={imgLinkStyle}><img style={imgStyle} src={izzy}/></a>
      </div>
      <div style={linkDivStyle}>
        <Link to="/" style={linkStyle}>Portfolio</Link>
        <Link to="/shop" style={linkStyle}>Shop</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </div>
  )
}
