import React from 'react'

const HeaderText = (props: { text: string }) => <h1>{props.text}</h1>

const Text = (props: { text?: string }) => {
  if (props.text) return <HeaderText text={props.text} />

  return <p>No text</p>
}

export default Text

export { HeaderText }
