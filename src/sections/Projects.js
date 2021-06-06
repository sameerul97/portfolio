import React, { useState, useReducer } from 'react'
import Store from '../Store'

import Section from '../components/Section'
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'

import { ProjectCard } from '../components/ProjectCard'

const ButtonTags = [
  { id: 6, filterName: 'all', name: 'all' },
  { id: 1, filterName: 'react', name: 'react' },
  { id: 2, filterName: 'vanilla', name: 'vanilla' },
  { id: 3, filterName: 'experiments', name: 'experiments' },
  { id: 4, filterName: 'database', name: 'database' },
  { id: 5, filterName: 'node', name: 'node' },
]

const defaultState = Store.data

function useProjectFilter(state, action) {
  switch (action.type) {
    case 'all':
      return Store.data
    case 'react':
      return Store.data.filter((i) => i.filterName === 'react')
    case 'vanilla':
      return Store.data.filter((i) => i.filterName === 'vanilla')
    case 'experiments':
      return Store.data.filter((i) => i.filterName === 'experiments')
    case 'database':
      return Store.data.filter((i) => i.filterName === 'database')
    case 'node':
      return Store.data.filter((i) => i.filterName === 'node')
    default:
      throw new Error()
  }
}

export function Projects({ initialCount }) {
  const [state, dispatch] = useReducer(useProjectFilter, defaultState)
  const [filterName, setFilterName] = useState('all')

  return (
    <Section id="about" classes="min-vh-100">
      <h1>My Work</h1>

      {/* {ButtonTags.map((button) => (
        <FilterButton
          key={button.id}
          filterName={filterName}
          button={button}
          dispatch={dispatch}
          setFilterName={setFilterName}
        />
      ))} */}
      <Tabs>
        {ButtonTags.map((button) => (
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
        {state.map((project) => (
          <BootstrapMdColumn key={project.id}>
            <ProjectCard project={project} />
          </BootstrapMdColumn>
        ))}
      </div>
    </Section>
  )
}

const BootstrapMdColumn = ({ children }) => <div className="col-md-4 my-2">{children}</div>

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className={` ${
        props.filterName === props.button.tagName ? 'active' : ''
      } btn btn-light rounded-pill m-1 text-capitalize `}
      onClick={() => {
        props.dispatch({ type: props.button.tagName })
        props.setFilterName(props.button.tagName)
      }}>
      {props.button.tagName}
    </button>
  )
}
