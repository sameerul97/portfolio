import React from 'react'

import { TabsChildren } from '../interfaces'

export default function ({ children }: TabsChildren) {
  return (
    <ul className="tabs" role="tablist">
      {children}
    </ul>
  )
}
