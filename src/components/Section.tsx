import React, { ReactNode } from 'react'

import { SectionProps } from '../interfaces'

/* Params: {id, classes} Classes param accepts string. I.e override section bg color with bg-red */
export default function Section({ id, classes, children }: SectionProps) {
  return (
    <section className={`utils ${classes ? classes : ''}`} id={id ? id : ''}>
      <Board>{children}</Board>
    </section>
  )
}

const Board = ({ children }: { children: ReactNode }) => <div className="m-auto rounded board">{children}</div>

export { Board }
