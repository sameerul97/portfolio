import React from 'react'
import { ClickableBadge, Badge } from './Badge'

const ProjectCard = ({ project }) => {
  return (
    <div className="card border-light p-1">
      <ProjectImage image={project.image} imageCaption={project.name} />

      <ProjectBody>
        <ProjectName name={project.name} />

        {project.projectTags.map((tag) =>
          tag.link ? <ClickableBadge Badge key={tag.id} tag={tag} /> : <Badge Badge key={tag.id} tag={tag} />
        )}
      </ProjectBody>
    </div>
  )
}

const ProjectImage = ({ image, imageCaption }) => <img src={image} className="card-img-top" alt={imageCaption} />

const ProjectName = ({ name }) => <h6 className="card-text text-dark">{name}</h6>

const ProjectBody = ({ children }) => <div className="card-body">{children}</div>

export { ProjectCard, ProjectImage, ProjectName, ProjectBody }
