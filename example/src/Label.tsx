import React, { Component } from 'react'

type TLabelProps = {
  isSelecting: boolean
  isSelected: boolean
}

class Label extends Component<TLabelProps> {
  render() {
    const { isSelecting, isSelected } = this.props

    return (
      <div className="card-label">
        Selecting: <span>{`${isSelecting}`}</span>
        <br />
        Selected: <span>{`${isSelected}`}</span>
      </div>
    )
  }
}

export default Label
