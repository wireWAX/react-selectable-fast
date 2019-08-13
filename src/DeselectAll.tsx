import React, { Component, ReactNode } from 'react'
import { ReactComponentLike } from 'prop-types'

import SelectableGroupContext from './Context'

type TDeselectAllButton = {
  children: ReactNode
  component?: ReactComponentLike
  className?: string
  [key: string]: any
}

class DeselectAllButton extends Component<TDeselectAllButton> {
  static contextType = SelectableGroupContext

  root: HTMLDivElement | null = null

  componentDidMount() {
    this.root!.addEventListener('mousedown', (evt: Event) => evt.stopPropagation())
  }

  getRootRef = (ref: HTMLDivElement | null) => {
    this.root = ref
  }

  render() {
    const { component: ButtonComponent = 'div', children, className, ...rest } = this.props

    return (
      <ButtonComponent
        ref={this.getRootRef}
        className={`selectable-select-all ${className}`}
        onClick={this.context.selectable.clearSelection}
        {...rest}
      >
        {children}
      </ButtonComponent>
    )
  }
}

export default DeselectAllButton
