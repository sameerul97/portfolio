import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { screen } from '@testing-library/react'

/* Components */
import Section, { Board } from '../../components/Section'

Enzyme.configure({ adapter: new Adapter() })

describe('Section', () => {
  it('should render Board with children', () => {
    const BoardChildren = `
      <div class="row">
        <div class="col-lg-6 text-center">
          <img src="./profile.png" alt="" class="img-fluid  rounded">
        </div>
        <div class="col-lg-6 pt-3 pt-lg-0">
          <div class="text-left">
            <h1>About Me</h1>
          </div>
        </div>
      </div>
    `

    const BoardWrapper = shallow(<Board>{BoardChildren}</Board>)
    const children = BoardWrapper.props().children

    expect(children).toEqual(BoardChildren)
  })

  const SectionChildren = `
      <div class="row">
        <div class="col-lg-6 text-center">
          <img src="./profile.png" alt="" class="img-fluid  rounded">
        </div>
        <div class="col-lg-6 pt-3 pt-lg-0">
          <div class="text-left">
            <h1>About Me</h1>
          </div>
        </div>
      </div>
    `

  it('should render section with custom CSS class', () => {
    const classes = 'bg-white text-dark customClass'
    const wrapper = shallow(<Section id="About" classes={classes}>{SectionChildren}</Section>)

    expect(wrapper.find(Board)).toHaveLength(1)
    expect(wrapper.find(Board).props().children).toEqual(SectionChildren)
    expect(wrapper.hasClass(classes)).toBe(true)
  })

  it('should render section with custom CSS class and Id', () => {
    const classes = 'bg-white text-dark customClass'
    const id = 'myWork'
    const wrapper = shallow(
      <Section classes={classes} id={id}>
        {SectionChildren}
      </Section>
    )

    expect(wrapper.exists(`#${id}`)).toBe(true)

    expect(wrapper.find(Board)).toHaveLength(1)
    expect(wrapper.find(Board).props().children).toEqual(SectionChildren)
    expect(wrapper.hasClass(classes)).toBe(true)
  })

  it('should render section with default CSS class and id when parameter is not passed', () => {
    const wrapper = shallow(<Section id="">{SectionChildren}</Section>)

    expect(wrapper.props().id).toBe('')
    expect(wrapper.find(Board)).toHaveLength(1)
    expect(wrapper.find(Board).props().children).toEqual(SectionChildren)
  })
})
