import React from 'react'
import { ClickableBadgeprops, BadgeProps } from '../interfaces'

const ClickableBadge = ({ tag }: ClickableBadgeprops) => (
  <a href={tag.link} target="_blank" rel="noopener noreferrer">
    <span className="badge rounded-pill bg-secondary me-1 fw-light">{tag.name}</span>
  </a>
)

const Badge = ({ tag, classes }: BadgeProps) => (
  <span className={`badge rounded-pill bg-dark me-1 fw-light ${classes}`}>{tag.name}</span>
)

export { ClickableBadge, Badge }
