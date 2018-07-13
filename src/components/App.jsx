import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Body from './Body'
import Shop from './Shop'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelopeSquare)

export default function App(){
  return (
    <div>
      <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: 'Alegreya Sans SC';
            width: 100%;
            height: 100%;
            background-color: #fafaf9;
            color: #551a8b;
          }
          `}
      </style>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Body} />
          <Route path='/shop' component={Shop} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
