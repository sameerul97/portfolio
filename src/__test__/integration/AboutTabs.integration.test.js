import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

/* Components */

import { About, AboutTabs } from '../../sections/About'
import AboutStore from '../../store/AboutStore'
Enzyme.configure({ adapter: new Adapter() })

const AboutData = () => [
  {
    id: 1,
    filterName: 'mainSkills',
    name: 'main skills',
    info: [
      {
        id: 1,
        name: 'Front-end',
        tags: [
          { id: 1, name: 'Vanilla' },
          { id: 2, name: 'React' },
          { id: 3, name: 'TypeScript' },
          { id: 4, name: 'ThreeJs' },
          { id: 5, name: 'Bootstrap' },
          { id: 6, name: 'JQuery' },
          { id: 7, name: 'AngularJs' },
        ],
      },
      {
        id: 2,
        name: 'Backend-end',
        tags: [
          { id: 1, name: 'Nodejs' },
          { id: 2, name: 'Expressjs' },
          { id: 3, name: 'REST' },
          { id: 4, name: 'PHP' },
          { id: 5, name: 'SQL' },
          { id: 6, name: 'MySql' },
          { id: 7, name: 'Postgres' },
          { id: 8, name: 'MongoDB' },
          { id: 9, name: 'Redis' },
        ],
      },
      {
        id: 3,
        name: 'Others',
        tags: [
          {
            id: 1,
            name: 'AWS',
          },
          { id: 2, name: 'Docker' },
        ],
      },
    ],
  },
  {
    id: 2,
    filterName: 'experience',
    name: 'experience',
    info: [
      {
        id: 1,
        name: 'Bauer Media Group - Web Developer',
        info: '2019 - present',
      },
      {
        id: 2,
        name: 'Sahab Solicitors - Web Freelancer',
        info: '2017 - 2018',
      },
    ],
  },
  {
    id: 3,
    filterName: 'education',
    name: 'education',
    info: [
      {
        id: 1,
        name: 'MEng Computer Science',
        info: '2015 - 2019 Univeristy Of Hertfordshire',
      },
    ],
  },
]

jest.spyOn(window, 'fetch').mockResolvedValue({
  json: AboutData,
})
describe('About Section', () => {
  it('should render About section with initial state as Main Skills', async () => {
    const { getByText, getByRole } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      expect(getByText('Front-end')).toBeInTheDocument()
      expect(getByText('Backend-end')).toBeInTheDocument()
      expect(getByText('Others')).toBeInTheDocument()

      const MainSkillsTab = getByRole('tab', { selected: true, name: 'main skills' })
      const ExperienceTab = getByRole('tab', { selected: false, name: 'experience' })
      const EducationTab = getByRole('tab', { selected: false, name: 'education' })

      expect(ExperienceTab).toBeInTheDocument()
      expect(ExperienceTab).toHaveTextContent('experience')
      expect(ExperienceTab).not.toHaveClass('tabs__tab--selected')

      expect(EducationTab).toBeInTheDocument()
      expect(EducationTab).toHaveTextContent('education')
      expect(EducationTab).not.toHaveClass('tabs__tab--selected')

      expect(MainSkillsTab).toBeInTheDocument()
      expect(MainSkillsTab).toHaveTextContent('main skills')
      expect(MainSkillsTab).toHaveClass('tabs__tab--selected')
    })
  })
})
