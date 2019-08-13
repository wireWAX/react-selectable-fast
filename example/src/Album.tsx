import React, { Component } from 'react'

import { createSelectable, TSelectableItemProps } from '../../src'
import Label from './Label'

type TAlbumProps = TSelectableItemProps & {
  title: string
  year: number
}

const DISABLED_CARD_YEARS = [10, 22, 27, 54, 82, 105, 150]

class Album extends Component<TAlbumProps> {
  render() {
    const { selectableRef, isSelected, isSelecting, title, year } = this.props

    const classNames = [
      'item',
      DISABLED_CARD_YEARS.includes(year) && 'not-selectable',
      isSelecting && 'selecting',
      isSelected && 'selected'
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={selectableRef} className={classNames}>
        <div className="tick">+</div>
        <h2>{title}</h2>
        <small>{year}</small>
        <Label isSelected={isSelected} isSelecting={isSelecting} />
      </div>
    )
  }
}

export default createSelectable(Album)
