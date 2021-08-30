import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Tabs from '../../components/Tabs'

Enzyme.configure({ adapter: new Adapter() })

describe('Tabs', () => {
  it('should render Tabs children', () => {
    const TabsChildren = {
      children: `
        <li
          className= "text-capitalize tabs__tab "
          onClick={() => {}}
          role="tab"
          id="react-tabs-0"
          aria-selected="true"
          aria-disabled="false"
          aria-controls="react-tabs-1"
          tabIndex="0">
          {button.name}
      </li>`,
    }
    const TabsWrapper = shallow(<Tabs>{TabsChildren.children}</Tabs>)
    const children = TabsWrapper.props().children

    expect(children).toEqual(TabsChildren.children)
  })
})
