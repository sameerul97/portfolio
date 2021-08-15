import React from 'react'

export default function Tab({ button, filterName, dispatch, setFilterName }) {
  return (
    <li
      className={`text-capitalize tabs__tab ${filterName === button.filterName ? 'tabs__tab--selected' : ''}  `}
      onClick={() => {
        dispatch({ type: button.filterName })
        setFilterName(button.filterName)
      }}
      role="tab"
      aria-selected={filterName === button.filterName}
      aria-disabled="false"
      aria-controls="react-tabs-1"
      tabIndex="0">
      {button.name}
    </li>
  )
}
