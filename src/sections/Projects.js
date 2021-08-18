import React, { useContext, useState, useEffect } from 'react'

import { Context } from '../store/WorkStore'

import Section from '../components/Section'
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'

import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  const [state, dispatch] = useContext(Context)
  const [filterName, setFilterName] = useState('all')

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch('./work.json')
        const data = await response.json()

        dispatch({ type: 'SET_WORK', payload: data })
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Unable to load work' })
      }
    }

    FetchData()
  }, [dispatch])

  let ProjectError = undefined

  if (state.error) {
    ProjectError = (
      <p>
        <strong>{state.error}</strong>
      </p>
    )
  }

  return (
    <Section id="projects" classes="min-vh-100">
      <h1>My Work</h1>
      {ProjectError}
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
          <BootstrapColumn key={project.id}>
            <ProjectCard project={project} />
          </BootstrapColumn>
        ))}
      </div>
    </Section>
  )
}

const BootstrapColumn = ({ children }) => <div className="col-lg-4 col-sm-6 my-2">{children}</div>
