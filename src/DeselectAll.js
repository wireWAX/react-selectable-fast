import React, { Component } from 'react'
import { object, node } from 'prop-types'

import SelectableGroupContext from './Context'

class DeselectAllButton extends Component {
  static contextType = SelectableGroupContext

  static propTypes = {
    children: object,
    component: node,
  }

  static defaultProps = {
    component: 'div',
  }

  componentDidMount() {
    this.root.addEventListener('mousedown', e => e.stopPropagation())
  }

  getRootRef = c => (this.root = c)

  render() {
    return (
      <this.props.component
        ref={this.getRootRef}
        onClick={this.context.selectable.clearSelection}
        className={`selectable-deselect-all ${this.props.className}`}
      >
        {this.props.children}
      </this.props.component>
    )
  }
}

export default DeselectAllButton
