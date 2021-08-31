import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import profile from '../../../public/profile.png'
/* Components */

import { About } from '../../sections/About'
import AboutStore from '../../store/about'
import { AboutList, Tag } from '../../store/about/state'

Enzyme.configure({ adapter: new Adapter() })

const AboutData = () => [
  {
    id: 1,
    filterName: 'mainSkills',
    name: 'main skills',
    info: [
      {
        id: '1',
        name: 'Front-end',
        tags: [
          { id: '1', name: 'Vanilla' },
          { id: '2', name: 'React' },
          { id: '3', name: 'TypeScript' },
          { id: '4', name: 'ThreeJs' },
          { id: '5', name: 'Bootstrap' },
          { id: '6', name: 'JQuery' },
          { id: '7', name: 'AngularJs' },
        ],
      },
      {
        id: '2',
        name: 'Back-end',
        tags: [
          { id: '1', name: 'Nodejs' },
          { id: '2', name: 'Expressjs' },
          { id: '3', name: 'REST' },
          { id: '4', name: 'PHP' },
          { id: '5', name: 'SQL' },
          { id: '6', name: 'MySql' },
          { id: '7', name: 'Postgres' },
          { id: '8', name: 'MongoDB' },
          { id: '9', name: 'Redis' },
        ],
      },
      {
        id: '3',
        name: 'Others',
        tags: [
          {
            id: '1',
            name: 'AWS',
          },
          { id: '2', name: 'Docker' },
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

const mockSuccessResponse = AboutData()
const mockJsonPromise = Promise.resolve(mockSuccessResponse)
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
})
var globalRef: any = global
globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise)

describe('About Section', () => {
  it('should render initial state as Main Skills', async () => {
    const { getByText, getByRole } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      expect(getByText('Front-end')).toBeInTheDocument()
      expect(getByText('Back-end')).toBeInTheDocument()
      expect(getByText('Others')).toBeInTheDocument()

      const { info: MainSkillsData } = AboutData()[0]

      for (const data of MainSkillsData) {
        if ('tags' in data) {
          const SkillTags = data.tags
          SkillTags.forEach((skill: any) => expect(getByText(skill.name)).toBeInTheDocument())
        }
      }

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

  it('should render education data when clicked', async () => {
    const { getByText, getByRole } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      const MainSkillsTab = getByRole('tab', { selected: true, name: 'main skills' })
      const ExperienceTab = getByRole('tab', { selected: false, name: 'experience' })
      const EducationTab = getByRole('tab', { selected: false, name: 'education' })

      fireEvent.click(EducationTab)

      expect(MainSkillsTab).not.toHaveClass('tabs__tab--selected')
      expect(ExperienceTab).not.toHaveClass('tabs__tab--selected')
      expect(EducationTab).toHaveClass('tabs__tab--selected')

      expect(getByText('MEng Computer Science')).toBeInTheDocument()
    })
  })

  it('should render experience data when clicked', async () => {
    const { getByText, getByRole, queryByRole } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      const MainSkillsTab = getByRole('tab', { selected: true, name: 'main skills' })
      const ExperienceTab = getByRole('tab', { selected: false, name: 'experience' })
      const EducationTab = getByRole('tab', { selected: false, name: 'education' })

      fireEvent.click(ExperienceTab)

      expect(queryByRole('tab', { selected: true, name: 'main skills' })).toBe(null)
      expect(queryByRole('tab', { selected: true, name: 'experience' })).not.toBe(null)

      expect(getByText('Bauer Media Group - Web Developer')).toBeInTheDocument()
      expect(getByText('Sahab Solicitors - Web Freelancer')).toBeInTheDocument()

      expect(MainSkillsTab).not.toHaveClass('tabs__tab--selected')
      expect(EducationTab).not.toHaveClass('tabs__tab--selected')
      expect(ExperienceTab).toHaveClass('tabs__tab--selected')
    })
  })

  it('should contain About me heading and image', async () => {
    const { getByText, getByAltText } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      expect(getByText('About Me')).toBeInTheDocument()
      expect(getByAltText('sameer_image')).toBeDefined()
      expect(getByAltText('sameer_image')).toHaveAttribute('src', `./${profile}`)
    })
  })

  it('should render mainSkills data when clicked', async () => {
    const { getByText, getByRole } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      const MainSkillsTab = getByRole('tab', { selected: true, name: 'main skills' })
      const ExperienceTab = getByRole('tab', { selected: false, name: 'experience' })
      const EducationTab = getByRole('tab', { selected: false, name: 'education' })

      fireEvent.click(MainSkillsTab)

      expect(MainSkillsTab).toHaveClass('tabs__tab--selected')
      expect(ExperienceTab).not.toHaveClass('tabs__tab--selected')
      expect(EducationTab).not.toHaveClass('tabs__tab--selected')

      expect(getByText('Front-end')).toBeInTheDocument()
      expect(getByText('Back-end')).toBeInTheDocument()
      expect(getByText('Others')).toBeInTheDocument()

      const { info: MainSkillsData } = AboutData()[0]

      for (const data of MainSkillsData) {
        if ('tags' in data) {
          const SkillTags: Array<Tag> = data.tags
          SkillTags.forEach((skill: any) => expect(getByText(skill.name)).toBeInTheDocument())
        }
      }
    })
  })

  it('should show unable to fetch about data', async () => {
    jest.spyOn(window, 'fetch').mockRejectedValue(new Error('error'))

    const { getByText } = render(
      <AboutStore>
        <About />
      </AboutStore>
    )

    await waitFor(() => {
      expect(getByText('About Me')).toBeInTheDocument()
      expect(getByText('Unable to load about')).toBeInTheDocument()
    })
  })
})
