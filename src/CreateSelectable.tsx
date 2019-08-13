import React, { Component, ComponentType } from 'react'
import { bool } from 'prop-types'

import { getBoundsForNode, TComputedBounds, TGetBoundsForNodeArgs } from './utils'
import { TSelectableItemState } from './Selectable.types'
import SelectableGroupContext from './Context'

const createSelectable = (WrappedComponent: ComponentType<any>) =>
  class SelectableItem extends Component<any, TSelectableItemState> {
    static contextType = SelectableGroupContext

    static propTypes = {
      isSelected: bool
    }

    static defaultProps = {
      isSelected: false
    }

    state = {
      isSelected: this.props.isSelected,
      isSelecting: false
    }

    node: HTMLElement | null = null
    bounds: TComputedBounds | null = null

    componentDidMount() {
      this.registerSelectable()
    }

    componentWillUnmount() {
      this.context.selectable.unregister(this)
    }

    registerSelectable = (containerScroll?: TGetBoundsForNodeArgs) => {
      this.bounds = getBoundsForNode(this.node!, containerScroll)
      this.context.selectable.register(this)
    }

    getSelectableRef = (ref: HTMLElement | null) => {
      this.node = ref
    }

    render() {
      return (
        <WrappedComponent {...this.props} {...this.state} selectableRef={this.getSelectableRef} />
      )
    }
  }

export default createSelectable
