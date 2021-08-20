import React, { ReactNode } from 'react'

interface DOMAttributes {
  children?: ReactNode
}
export default function ({ children }: DOMAttributes) {
  return (
    <ul className="tabs" role="tablist">
      {children}
    </ul>
  )
}
