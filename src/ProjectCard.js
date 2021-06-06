import React, { useState } from 'react'

export function ProjectCard({ project }) {
  const [text, setText] = useState('Card')

  return (
    <div className="card border-light" style={{ width: '18rem' }}>
      <ProjectImage image={project.image} imageCaption={project.name} />

      <ProjectBody>
        <ProjectName name={project.name} />

        {project.projectTags.map((tag) =>
          tag.link ? <ClickableProjectTag key={tag.id} tag={tag} /> : <ProjectTag key={tag.id} tag={tag} />
        )}
      </ProjectBody>
    </div>
  )
}

const ClickableProjectTag = ({ tag }) => (
  <a href={tag.link} target="_blank">
    <span className="badge badge-pill badge-dark mx-1">{tag.name}</span>
  </a>
)

const ProjectTag = ({ tag }) => <span className="badge badge-pill badge-secondary mx-1">{tag.name}</span>

const ProjectImage = ({ image, imageCaption }) => <img src={image} className="card-img-top" alt={imageCaption} />

const ProjectName = ({ name }) => <p className="card-text text-dark">{name}</p>

const ProjectBody = ({ children }) => <div className="card-body">{children}</div>
