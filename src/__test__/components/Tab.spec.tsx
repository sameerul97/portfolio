import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Tab from '../../components/Tab'

Enzyme.configure({ adapter: new Adapter() })

describe('Tab', () => {
  it('should render Tab', () => {
    const Button = { name: 'React', filterName: 'react' }
    const filterName = 'react'
    const dispatch = jest.fn()
    const setFilterName = jest.fn()
    const TabWrapper = shallow(
      <Tab button={Button} filterName={filterName} dispatch={dispatch} setFilterName={setFilterName} />
    )

    TabWrapper.simulate('click')

    expect(setFilterName).toHaveBeenCalledWith(Button.filterName)
    expect(dispatch).toHaveBeenCalledWith({ type: Button.filterName })
    expect(TabWrapper.text()).toEqual(Button.name)

    expect(TabWrapper.hasClass('tabs__tab--selected')).toBe(true)
  })

  it('should render Tab with not selected tab', () => {
    const Button = { name: 'React', filterName: 'react' }
    const filterName = 'vanilla'
    const dispatch = jest.fn()
    const setFilterName = jest.fn()
    const TabWrapper = shallow(
      <Tab button={Button} filterName={filterName} dispatch={dispatch} setFilterName={setFilterName} />
    )

    TabWrapper.simulate('click')

    expect(setFilterName).toHaveBeenCalledWith(Button.filterName)
    expect(dispatch).toHaveBeenCalledWith({ type: Button.filterName })
    expect(TabWrapper.text()).toEqual(Button.name)

    expect(TabWrapper.hasClass('tabs__tab--selected')).toBe(false)
  })
})
