import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, within, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import profile from '../../../public/profile.png'
/* Components */

import { Projects } from '../../sections/Projects'
import WorkStore from '../../store/WorkStore'

Enzyme.configure({ adapter: new Adapter() })

const ProjectJSON = {
  filterButtons: [
    { id: 6, filterName: 'all', name: 'all' },
    { id: 1, filterName: 'react', name: 'react' },
    { id: 2, filterName: 'vanilla', name: 'vanilla' },
    { id: 3, filterName: 'webgl', name: 'webgl' },
    { id: 4, filterName: 'database', name: 'database' },
    { id: 5, filterName: 'node', name: 'node' },
  ],
  work: [
    {
      id: 1,
      name: 'Asana automation (AWS)',
      filterName: 'node',
      image: './node-serverless.png',
      projectTags: [
        {
          id: 1,
          name: 'Serverless',
        },
        {
          id: 2,
          name: 'Asynchronous',
        },
        {
          id: 3,
          name: 'Node JS',
        },
      ],
    },
    {
      id: 2,
      name: 'Pictionary (Web based)',
      filterName: 'node',
      image: './socket-node-redis-docker.jpeg',
      projectTags: [
        {
          id: 1,
          name: 'Github',
          link: 'https://github.com/sameerul97/guessthewordapp/tree/dev',
        },
        {
          id: 2,
          name: 'Nodejs',
        },
        {
          id: 3,
          name: 'Socket.Io',
        },
        {
          id: 4,
          name: 'Redis',
        },
        {
          id: 5,
          name: 'Postgres',
        },
        {
          id: 6,
          name: 'Docker',
        },
      ],
    },
    {
      id: 3,
      name: 'Talent Platform',
      filterName: 'database',
      image: './talent_platform.png',
      projectTags: [
        {
          id: 1,
          name: 'Github',
          link: 'https://github.com/sameerul97/Talent_Platform',
        },
        {
          id: 2,
          name: 'ES6',
        },
        {
          id: 3,
          name: 'Webpack',
        },
        {
          id: 4,
          name: 'Design Prototype',
          link: 'https://xd.adobe.com/view/323f507d-8dac-4e8d-a21a-79457a6a679f-676c/',
        },
        {
          id: 5,
          name: 'Database',
          link: 'https://creative.bauermedia.co.uk/scrollmagic/3d_experiment/talent_platform_schema.png',
        },
        {
          id: 6,
          name: 'PHP',
        },
        {
          id: 7,
          name: 'REST',
        },
      ],
    },
    {
      id: 4,
      name: 'Apple IPhone scrolling',
      filterName: 'webgl',
      image: './scrolling-iphone.png',
      projectTags: [
        {
          id: 1,
          name: 'Live link',
          link: 'https://creative.bauermedia.co.uk/scrollmagic/3d_experiment/',
        },
        {
          id: 2,
          name: 'Three JS',
        },
      ],
    },
    {
      id: 5,
      name: 'Grazia & Pandora WEBGL',
      filterName: 'webgl',
      image: './pandora-reflection.png',
      projectTags: [
        {
          id: 1,
          name: 'Live link',
          link: 'https://creative.bauermedia.co.uk/scrollmagic/3d_experiment/reflection2/',
        },
        {
          id: 2,
          name: 'React',
        },
        {
          id: 3,
          name: 'React Three Fiber',
        },
      ],
    },
    {
      id: 6,
      name: 'Wheres Your Head At',
      filterName: 'vanilla',
      image: './wyha.png',
      projectTags: [
        {
          id: 1,
          name: 'Live link',
          link: 'https://www.wheresyourheadat.org/pledgekindness/',
        },
        {
          id: 2,
          name: 'PHP',
        },
        {
          id: 3,
          name: 'Interactive Map',
        },
        {
          id: 4,
          name: 'Vanilla',
        },
        {
          id: 5,
          name: 'Jquery',
        },
      ],
    },
    {
      id: 7,
      name: 'Portfolio',
      filterName: 'react',
      image: './sameer-portfolio.JPG',
      projectTags: [
        {
          id: 1,
          name: 'Github',
          link: 'https://github.com/sameerul97/portfolio',
        },
        {
          id: 2,
          name: 'React',
        },
        {
          id: 3,
          name: 'React Three Fiber',
        },
      ],
    },
    {
      id: 8,
      name: 'Image Annotator',
      filterName: 'react',
      image: './img-annotator.png',
      projectTags: [
        {
          id: 1,
          name: 'Live link',
          link: 'https://creative.bauermedia.co.uk/scrollmagic/img-annotator-v3/#/images',
        },
        {
          id: 2,
          name: 'Github',
          link: 'https://github.com/sameerul97/img-annotator',
        },
        {
          id: 3,
          name: 'PHP',
        },
        {
          id: 4,
          name: 'REST',
        },
        {
          id: 5,
          name: 'JWT',
        },
        {
          id: 6,
          name: 'MySQL',
        },
        {
          id: 7,
          name: 'Docker',
        },
      ],
    },
    {
      id: 9,
      name: 'Adventure Creative Pages',
      filterName: 'vanilla',
      image: './creative-page.png',
      projectTags: [
        {
          id: 1,
          name: 'Live link',
          link: 'https://creative.bauermedia.co.uk/view_projects',
        },
        {
          id: 2,
          name: 'Showcase',
        },
        {
          id: 3,
          name: '2020 Creative Pages',
        },
      ],
    },
    {
      id: 10,
      name: 'Talent Platform',
      filterName: 'vanilla',
      image: './talent_platform.png',
      projectTags: [
        {
          id: 1,
          name: 'Github',
          link: 'https://github.com/sameerul97/Talent_Platform',
        },
        {
          id: 2,
          name: 'ES6',
        },
        {
          id: 3,
          name: 'Webpack',
        },
        {
          id: 4,
          name: 'Design Prototype',
          link: 'https://xd.adobe.com/view/323f507d-8dac-4e8d-a21a-79457a6a679f-676c/',
        },
        {
          id: 5,
          name: 'Database',
          link: 'https://creative.bauermedia.co.uk/scrollmagic/3d_experiment/talent_platform_schema.png',
        },
        {
          id: 6,
          name: 'PHP',
        },
        {
          id: 7,
          name: 'REST',
        },
      ],
    },
  ],
}

const ProjectData = () => ProjectJSON

jest.spyOn(window, 'fetch').mockResolvedValue({
  json: ProjectData,
})
describe('About Section', () => {
  it('should render initial state as Main Skills', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of work) {
        const ProjectCard = getByTestId(project.id)
        const { projectTags } = project

        expect(within(ProjectCard).getByText(project.name)).toBeInTheDocument()

        for (const tags of projectTags) {
          const Badge = within(ProjectCard).getByText(tags.name).closest('a')

          if (tags.link) {
            expect(Badge).toHaveAttribute('href', tags.link)
          }
        }
      }

      const AllSkillsTab = getByRole('tab', { selected: true, name: 'all' })

      expect(AllSkillsTab).toBeInTheDocument()
      expect(AllSkillsTab).toHaveTextContent('all')
      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
    })
  })
})
