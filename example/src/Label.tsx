import React, { Component } from 'react'

type TLabelProps = {
  selecting: boolean
  selected: boolean
}

class Label extends Component<TLabelProps> {
  render() {
    const { selecting, selected } = this.props

    return (
      <div className="album-label">
        Selecting: <span>{`${selecting}`}</span>
        <br />
        Selected: <span>{`${selected}`}</span>
      </div>
    )
  }
}

export default Label
