import React from 'react'

const ClickableBadge = ({ tag }) => (
  <a href={tag.link} target="_blank" rel="noopener noreferrer">
    <span className="badge rounded-pill bg-secondary me-1 fw-light">{tag.name}</span>
  </a>
)

const Badge = ({ tag, classes }) => (
  <span className={`badge rounded-pill bg-dark me-1 fw-light ${classes}`}>{tag.name}</span>
)

export { ClickableBadge, Badge }
