import React from 'react'
import Header from './Header'
import Gallery from './Gallery'
import Footer from './Footer'

export default function App(){
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: 'Amatic SC', cursive;
            width: 100%;
            height: 100%;
            background-color: #fafaf9;
          }
          `}</style>
      <Header />
      <Gallery />
      <Footer />
    </div>
  )
}
