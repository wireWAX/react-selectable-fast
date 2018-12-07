import React, { Component } from 'react'
import { object, node } from 'prop-types'

import SelectableGroupContext from './Context'

class SelectAllButton extends Component {
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
        className={`selectable-select-all ${this.props.className}`}
        onClick={this.context.selectable.selectAll}
      >
        {this.props.children}
      </this.props.component>
    )
  }
}

export default SelectAllButton
