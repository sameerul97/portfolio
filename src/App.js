import React from 'react'

import { Header } from './sections/Header'
import { About } from './sections/About'
import AboutStore from './AboutStore'
import { Projects } from './sections/Projects'

export default function App() {
  return (
    <React.Fragment>
      <div id="webgl">
        <Header />
      </div>
      <AboutStore>
        <About />
      </AboutStore>
      <Projects />
    </React.Fragment>
  )
}
