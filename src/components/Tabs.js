import React from 'react'

export default function ({ children }) {
  return (
    <ul className="tabs" role="tablist">
      {children}
    </ul>
  )
}
