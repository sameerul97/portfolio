import React, { ReactNode } from 'react'
import { ClickableBadge, Badge } from './Badge'
import { ProjectCardProps } from '../interfaces'

const ProjectCard = ({ project }: { project: ProjectCardProps }) => {
  return (
    <div className="card border-light p-1" data-testid={project.id}>
      <ProjectImage image={project.image} imageCaption={project.name} />

      <ProjectBody>
        <ProjectName name={project.name} />

        {project.projectTags.map((tag) =>
          tag.link ? <ClickableBadge key={tag.id} tag={tag} /> : <Badge key={tag.id} tag={tag} />
        )}
      </ProjectBody>
    </div>
  )
}

const ProjectImage = ({ image, imageCaption }: { image: string; imageCaption: string }) => (
  <img src={image} className="card-img-top" alt={imageCaption} />
)

const ProjectName = ({ name }: { name: string }) => <h6 className="card-text text-dark">{name}</h6>

const ProjectBody = ({ children }: { children: ReactNode }) => <div className="card-body">{children}</div>

export { ProjectCard, ProjectImage, ProjectName, ProjectBody }
