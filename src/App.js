import React from 'react'

import { Header } from './Header'
import { About } from './About'
import AboutStore from './AboutStore'

export default function App() {
  return (
    <React.Fragment>
      <div id="webgl">
        <Header />
      </div>
      <AboutStore>
        <About />
      </AboutStore>
    </React.Fragment>
  )
}
