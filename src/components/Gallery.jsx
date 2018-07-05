import React from 'react'
import Tile from './Tile'
import crow from './../assets/images/crowSkull4.jpg'
import couch from './../assets/images/couch2.png'
import crane from './../assets/images/crane3.png'
import duckie from './../assets/images/duckie3.png'
import fishies from './../assets/images/fishies.png'
import goddess from './../assets/images/goddess.png'
import green from './../assets/images/green.png'
import loveIsLove from './../assets/images/loveIsLove2.png'
import tea from './../assets/images/tea2.png'
import './../assets/Gallery.css'

// import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
//
// export class Example extends Component {
//   openPopupbox() {
//     const content = <img url="static/demo.jpg" />
//     PopupboxManager.open({
//       content,
//       config: {
//         titleBar: {
//           enable: true,
//           text: 'Meow!'
//         },
//         fadeIn: true,
//         fadeInSpeed: 500
//       }
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.openPopupbox}>Click me</button>
//         <PopupboxContainer />
//       </div>
//     )
//   }
// }

const artCollection = [
  {
    title: 'crane',
    image: crane
  },
  {
    title: 'crow',
    image: crow
  },
  {
    title: 'duckie',
    image: duckie
  },
  {
    title: 'couch',
    image: couch
  },
  {
    title: 'love is love',
    image: loveIsLove
  },
  {
    title: 'tea',
    image: tea
  },
  {
    title: 'fishies',
    image: fishies
  },
  {
    title: 'goddess',
    image: goddess
  },
  {
    title: 'green',
    image: green
  },
]

export default function Gallery(){

  const mainDivStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    // marginLeft: '10',
    // marginRight: '10'
  }


  return (
    <div id='gallery-div' style={mainDivStyle}>
      {artCollection.map((tile, index) =>
        <Tile id='tile' title={tile.title}
          image={tile.image}
          key={index} />
      )}
    </div>
  )
}
