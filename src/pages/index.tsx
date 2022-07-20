import React from 'react'

import { Header } from '../sections/Header'
import { Projects } from '../sections/Projects'
import { About } from '../sections/About'

import AboutStore from '../store/about'
import WorkStore from '../store/work'

export default function Web() {
  return (
    <div>
      <React.Fragment>
        <div id="webgl" style={{ height: '100vh', width: '100vw' }}>
          <Header />
        </div>

        <AboutStore>
          <About />
        </AboutStore>

        <WorkStore>
          <Projects />
        </WorkStore>
      </React.Fragment>
    </div>
  )
}
