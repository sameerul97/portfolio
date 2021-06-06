import React from 'react'

const Tab = ({ button, filterName, dispatch, setFilterName }) => (
  <li
    className={`text-capitalize tabs__tab  ${filterName === button.filterName ? 'tabs__tab--selected' : ''}  `}
    onClick={() => {
      dispatch({ type: button.filterName })
      setFilterName(button.filterName)
    }}
    role="tab"
    id="react-tabs-0"
    aria-selected="true"
    aria-disabled="false"
    aria-controls="react-tabs-1"
    tabIndex="0">
    {button.name}
  </li>
)

export { Tab }
