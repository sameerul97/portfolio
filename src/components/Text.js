import React from 'react'

const HeaderText = (props) => <h1>{props.text}</h1>

const Text = (props) => {
  if (props.text) return <HeaderText text={props.text} />

  return <p>No text</p>
}

export default Text

export { HeaderText }
