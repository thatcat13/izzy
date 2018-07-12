import React from 'react'
import Header from './Header'

export default function Shop () {

  const pStyle = {
    fontSize: '1.75em',
    textAlign: 'center',
    margin: '20px'
  }

  return (
    <div>
      <Header />
      <p style={pStyle}>Art pieces for sale coming soon!
      </p>
    </div>
  )
}
