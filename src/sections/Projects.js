import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { Context } from '../store/WorkStore'

import Section from '../components/Section'
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'

import { ProjectCard } from '../components/ProjectCard'

export function Projects({ initialCount }) {
  const [state, dispatch] = useContext(Context)
  const [filterName, setFilterName] = useState('all')

  useEffect(() => {
    axios
      .get('./work.json')
      .then(({ data }) => {
        dispatch({ type: 'SET_WORK', payload: data })
      })
      .catch((error) => {
        dispatch({ type: 'SET_ERROR', payload: error })
      })
  }, [dispatch])

  return (
    <Section id="about" classes="min-vh-100">
      <h1>My Work</h1>
      <Tabs>
        {state.workFilterButtons.map((button) => (
          <Tab
            key={button.id}
            button={button}
            filterName={filterName}
            dispatch={dispatch}
            setFilterName={setFilterName}
          />
        ))}
      </Tabs>

      <div className="row">
        {state.selectedInfo.map((project) => (
          <BootstrapMdColumn key={project.id}>
            <ProjectCard project={project} />
          </BootstrapMdColumn>
        ))}
      </div>
    </Section>
  )
}

const BootstrapMdColumn = ({ children }) => <div className="col-md-4 my-2">{children}</div>
