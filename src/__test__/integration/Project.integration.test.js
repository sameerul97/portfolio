import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, within, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import profile from '../../../public/profile.png'
/* Components */

import { Projects } from '../../sections/Projects'
import WorkStore from '../../store/work'

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

describe('MyWork Section', () => {
  it('should render initial state as all skills', async () => {
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

  it('should render React project data when React filterbutton selected', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const SelectedFilter = 'react'
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()
      const ReactProjects = work.filter((project) => project.filterName === SelectedFilter)

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of ReactProjects) {
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

      const SelectedSkillTab = getByRole('tab', { name: SelectedFilter })
      const AllSkillsTab = getByRole('tab', { name: 'all' })

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(SelectedSkillTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(SelectedSkillTab)

      expect(SelectedSkillTab).toBeInTheDocument()
      expect(SelectedSkillTab).toHaveTextContent(SelectedFilter)
      expect(SelectedSkillTab).toHaveClass('tabs__tab--selected')

      expect(AllSkillsTab).not.toHaveClass('tabs__tab--selected')
    })
  })

  it('should render Vanilla project data when vanilla filterbutton selected', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const SelectedFilter = 'vanilla'
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()
      const VanillaProjects = work.filter((project) => project.filterName === SelectedFilter)

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of VanillaProjects) {
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

      const SelectedSkillTab = getByRole('tab', { name: SelectedFilter })
      const AllSkillsTab = getByRole('tab', { name: 'all' })

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(SelectedSkillTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(SelectedSkillTab)

      expect(SelectedSkillTab).toBeInTheDocument()
      expect(SelectedSkillTab).toHaveTextContent(SelectedFilter)
      expect(SelectedSkillTab).toHaveClass('tabs__tab--selected')

      expect(AllSkillsTab).not.toHaveClass('tabs__tab--selected')
    })
  })

  it('should render Webgl project data when webgl filterbutton selected', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const SelectedFilter = 'webgl'
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()
      const WebGLProjects = work.filter((project) => project.filterName === SelectedFilter)

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of WebGLProjects) {
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

      const SelectedSkillTab = getByRole('tab', { name: SelectedFilter })
      const AllSkillsTab = getByRole('tab', { name: 'all' })

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(SelectedSkillTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(SelectedSkillTab)

      expect(SelectedSkillTab).toBeInTheDocument()
      expect(SelectedSkillTab).toHaveTextContent(SelectedFilter)
      expect(SelectedSkillTab).toHaveClass('tabs__tab--selected')

      expect(AllSkillsTab).not.toHaveClass('tabs__tab--selected')
    })
  })

  it('should render Database project data when database filterbutton selected', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const SelectedFilter = 'database'
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()
      const DatabaseProjects = work.filter((project) => project.filterName === SelectedFilter)

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of DatabaseProjects) {
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

      const SelectedSkillTab = getByRole('tab', { name: SelectedFilter })
      const AllSkillsTab = getByRole('tab', { name: 'all' })

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(SelectedSkillTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(SelectedSkillTab)

      expect(SelectedSkillTab).toBeInTheDocument()
      expect(SelectedSkillTab).toHaveTextContent(SelectedFilter)
      expect(SelectedSkillTab).toHaveClass('tabs__tab--selected')

      expect(AllSkillsTab).not.toHaveClass('tabs__tab--selected')
    })
  })

  it('should render Node project data when nodejs filterbutton selected', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const SelectedFilter = 'node'
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()
      const NodeProjects = work.filter((project) => project.filterName === SelectedFilter)

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of NodeProjects) {
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

      const SelectedSkillTab = getByRole('tab', { name: SelectedFilter })
      const AllSkillsTab = getByRole('tab', { name: 'all' })

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(SelectedSkillTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(SelectedSkillTab)

      expect(SelectedSkillTab).toBeInTheDocument()
      expect(SelectedSkillTab).toHaveTextContent(SelectedFilter)
      expect(SelectedSkillTab).toHaveClass('tabs__tab--selected')

      expect(AllSkillsTab).not.toHaveClass('tabs__tab--selected')
    })
  })

  it('should render all project data when all filterbutton selected again', async () => {
    const { getByText, getByRole, getByTestId } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      const SelectedFilter = 'all'
      const { filterButtons } = ProjectData()
      const { work } = ProjectData()
      const AllProjects = work.filter((project) => project.filterName === SelectedFilter)

      const ReactSkillTab = getByRole('tab', { name: 'react' })
      const AllSkillsTab = getByRole('tab', { name: SelectedFilter })

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(ReactSkillTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(ReactSkillTab)

      expect(ReactSkillTab).toHaveClass('tabs__tab--selected')
      expect(AllSkillsTab).not.toHaveClass('tabs__tab--selected')

      fireEvent.click(AllSkillsTab)

      expect(AllSkillsTab).toHaveClass('tabs__tab--selected')
      expect(ReactSkillTab).not.toHaveClass('tabs__tab--selected')

      for (const filter of filterButtons) {
        expect(getByText(filter.name)).toBeInTheDocument()
      }

      for (const project of AllProjects) {
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
    })
  })

  it('should show unable to fetch work data', async () => {
    jest.spyOn(window, 'fetch').mockRejectedValue(new Error('error'))

    const { getByText } = render(
      <WorkStore>
        <Projects />
      </WorkStore>
    )

    await waitFor(() => {
      expect(getByText('My Work')).toBeInTheDocument()
      expect(getByText('Unable to load work')).toBeInTheDocument()
    })
  })
})
