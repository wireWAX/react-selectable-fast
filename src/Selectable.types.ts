import { Component } from 'react'

import { Maybe, TComputedBounds, TGetBoundsForNodeArgs } from './utils'

type TSelectableContext = {
  register(selectableItem: TSelectableItem): void
  unregister(selectableItem: TSelectableItem): void
  selectAll(): void
  clearSelection(): void
  getScrolledContainer(): Maybe<HTMLElement>
}

export type TSelectableGroupContext = {
  selectable: TSelectableContext
}

export type TSelectableItemState = {
  selected: boolean
  selecting: boolean
}

export type TSelectableItem = Component & {
  registerSelectable(containerScroll?: TGetBoundsForNodeArgs): void
  state: TSelectableItemState
  deselected: boolean
  node: Maybe<HTMLDivElement>
  bounds: Maybe<TComputedBounds>
}

export type TSelectableItemProps = {
  selected: boolean
  selecting: boolean
  selectableRef(node: HTMLElement | null): void
}
