import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* Components */
import Text, { HeaderText } from '../../components/Text'
import { ClickableBadge, Badge } from '../../components/Badge'

Enzyme.configure({ adapter: new Adapter() })

describe('Badge', () => {
  it('should render clickable badge', () => {
    const tag = {
      link: 'https://github.com',
      name: 'Github',
      id: '1',
    }

    const wrapper = shallow(<ClickableBadge tag={tag} />)
    const aTag = wrapper.find('a')
    const spanTag = wrapper.find('span')

    expect(aTag.props().href).toBe(tag.link)
    expect(spanTag.text()).toEqual(tag.name)
  })

  it('should render badge', () => {
    const tag = {
      name: 'Docker',
      id: '1',
    }

    const wrapper = shallow(<Badge tag={tag} />)
    const spanTag = wrapper.find('span')

    expect(spanTag.text()).toEqual(tag.name)
  })

  it('should render badge with custom CSS class', () => {
    const tag = {
      name: 'Docker',
      id: '1',
    }
    const classes = 'bg-white text-dark customClass'
    const wrapper = shallow(<Badge tag={tag} classes={classes} />)

    expect(wrapper.hasClass(classes)).toBe(true)
  })

  it('should render text', () => {
    const text = 'hello world'
    const wrapper = shallow(<Text text={text} />)

    expect(wrapper.find(HeaderText))
    expect(wrapper.find(HeaderText).prop('text')).toBe(text)
  })

  it('should render no text', () => {
    const text = 'No text'
    const wrapper = shallow(<Text />)
    const paragraph = wrapper.find('p')

    expect(paragraph.text()).toEqual(text)
  })
})
