import React, { Component, CSSProperties } from 'react'

type TSelectboxProps = {
  fixedPosition: boolean
  className: string
}

class Selectbox extends Component<TSelectboxProps> {
  static defaultProps = {
    className: 'selectable-selectbox'
  }

  state = {
    y: 0,
    x: 0,
    width: 0,
    height: 0,
    isSelecting: false
  }

  selectbox: HTMLDivElement | null = null

  getRef = () => this.selectbox

  getSelectboxRef = (ref: HTMLDivElement | null) => {
    this.selectbox = ref
  }

  render() {
    const { fixedPosition, className } = this.props

    const boxStyle: CSSProperties = {
      left: this.state.x,
      top: this.state.y,
      width: this.state.width,
      height: this.state.height,
      zIndex: 9000,
      position: fixedPosition ? 'fixed' : 'absolute',
      cursor: 'default'
    }

    return (
      <div>
        {this.state.isSelecting && (
          <div ref={this.getSelectboxRef} style={boxStyle} className={className} />
        )}
      </div>
    )
  }
}

export default Selectbox
