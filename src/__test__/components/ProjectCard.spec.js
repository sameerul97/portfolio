import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { screen } from '@testing-library/react'

/* Components */
import { ClickableBadge, Badge } from '../../components/Badge'
import { ProjectCard, ProjectImage, ProjectName, ProjectBody } from '../../components/ProjectCard'

Enzyme.configure({ adapter: new Adapter() })

describe('Project Card', () => {
  it('should render Project name', () => {
    const project = {
      name: 'Docker',
    }

    const wrapper = shallow(<ProjectName name={project.name} />)
    const el = wrapper.find('h6')

    expect(el.text()).toEqual(project.name)
  })

  it('should render Project Image', () => {
    const Project = {
      caption: 'Talent Platform',
      image: './talent_platform.png',
    }

    const ProjectImageWrapper = shallow(<ProjectImage image={Project.image} imageCaption={Project.caption} />)

    expect(ProjectImageWrapper.find('img').prop('src')).toEqual(Project.image)
    expect(ProjectImageWrapper.find('img').prop('alt')).toEqual(Project.caption)
  })

  it('should render Project Body children', () => {
    const Project = {
      children: '<h6 className="card-text text-dark">Talent Platform</h6>',
    }

    const ProjectTags = {
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
    }

    ProjectTags.projectTags.map((tag) =>
      tag.link
        ? (Project.children += `
            <a href=${tag.link} target="_blank" rel="noopener noreferrer">
                <span className="badge rounded-pill bg-secondary me-1 fw-light">${tag.name}</span>
            </a>`)
        : `<span className="badge rounded-pill bg-dark me-1 fw-light">${tag.name}</span>`
    )

    const ProjectBodyWrapper = shallow(<ProjectBody>{Project.children}</ProjectBody>)
    const children = ProjectBodyWrapper.props().children

    expect(children).toEqual(Project.children)
  })

  it('should render Project Card', () => {
    const Project = {
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
    }

    const ProjectCardWrapper = shallow(<ProjectCard project={Project} />)

    expect(ProjectCardWrapper.find(ProjectBody)).toHaveLength(1)
    expect(ProjectCardWrapper.find(ProjectImage)).toHaveLength(1)
    expect(ProjectCardWrapper.find(ProjectName)).toHaveLength(1)
    expect(ProjectCardWrapper.find(ClickableBadge)).toHaveLength(3)
    expect(ProjectCardWrapper.find(Badge)).toHaveLength(4)
  })
})
