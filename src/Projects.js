import React, { useState, useReducer } from 'react'
import Store from './Store'
import { ProjectCard } from './ProjectCard'

const ButtonTags = [
  { id: 1, tagName: 'react' },
  { id: 2, tagName: 'vanilla' },
  { id: 3, tagName: 'experiments' },
  { id: 4, tagName: 'database' },
  { id: 5, tagName: 'node' },
]

const defaultState = Store.data.filter((i) => i.filterName === 'react')

function useProjectFilter(state, action) {
  switch (action.type) {
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
  const [filterName, setFilterName] = useState('react')

  return (
    <React.Fragment>
      {ButtonTags.map((button) => (
        <FilterButton
          key={button.id}
          filterName={filterName}
          button={button}
          dispatch={dispatch}
          setFilterName={setFilterName}
        />
      ))}

      <div className="row">
        {state.map((project) => (
          <BootstrapMdColumn key={project.id}>
            <ProjectCard project={project} />
          </BootstrapMdColumn>
        ))}
      </div>
    </React.Fragment>
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
