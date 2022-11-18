import React from 'react'

import { Header } from './sections/Header'
import { About } from './sections/About'
import { Projects } from './sections/Projects'

import AboutStore from './store/about'
import WorkStore from './store/work'

export default function App() {
  return (
    <React.Fragment>
      <div id="webgl">
        <Header />
      </div>

      <AboutStore>
        <About />
      </AboutStore>

      <WorkStore>
        <Projects />
      </WorkStore>
    </React.Fragment>
  )
}
