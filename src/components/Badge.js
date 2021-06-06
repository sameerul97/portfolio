import React, { useState } from 'react'

const ClickableBadge = ({ tag }) => (
  <a href={tag.link} target="_blank">
    <span className="badge rounded-pill bg-secondary me-1 fw-light">{tag.name}</span>
  </a>
)

const Badge = ({ tag }) => <span className="badge rounded-pill bg-dark me-1 fw-light">{tag.name}</span>

export { ClickableBadge, Badge }
