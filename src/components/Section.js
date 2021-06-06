import React from 'react'

/* Params: {id, classes} Classes param accepts string. I.e override section bg color with bg-red */
export default function Section({ id, classes, children }) {
  return (
    <section className={`utils ${classes ? classes : ''}`} id={id}>
      <Board>{children}</Board>
    </section>
  )
}

const Board = ({ children }) => <div className="m-auto rounded board">{children}</div>
