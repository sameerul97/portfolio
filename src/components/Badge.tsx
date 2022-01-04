import React from 'react'
import { ClickableBadgeprops, BadgeProps } from '../interfaces'

const ClickableBadge = ({ tag }: ClickableBadgeprops) => (
  <a href={tag.link} target="_blank" rel="noopener noreferrer">
    <span className="badge rounded-pill bg-secondary mr-1 p-1 px-2 text-white font-weight-light">{tag.name}</span>
  </a>
)

const Badge = ({ tag, classes }: BadgeProps) => (
  <span className={`badge rounded-pill bg-dark mr-1 p-1 px-2 text-white font-weight-light ${classes}`}>{tag.name}</span>
)

export { ClickableBadge, Badge }
