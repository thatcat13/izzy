import React from 'react'
import Header from './Header'

export default function About () {

  const pStyle = {
    fontSize: '1.75em',
    textAlign: 'center',
    margin: '20px'
  }

  return (
    <div>
      <Header />
      <p style={pStyle}>About the Artist</p>
      <p style={pStyle}>Tiramisu gummi bears pudding lemon drops gummies brownie. Sweet roll caramels carrot cake sugar plum cake chocolate. Candy canes bear claw chupa chups toffee chupa chups topping powder. Toffee muffin sweet roll tart apple pie jujubes tart lollipop.
      </p>
    </div>
  )
}
