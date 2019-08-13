import React, { Component } from 'react'

import { TAlbumItem } from './sample-data'
import { DeselectAll, SelectAll } from '../../src'
import SelectableCard from './Card'

type TListProps = {
  items: TAlbumItem[]
}

class List extends Component<TListProps> {
  shouldComponentUpdate(nextProps: TListProps) {
    return nextProps.items !== this.props.items
  }

  render() {
    const { items } = this.props

    return (
      <div>
        <p className="not-selectable">Press ESC to clear selection</p>
        <div className="button-container">
          <SelectAll component="button" type="button" className="btn">
            Select all
          </SelectAll>
          <DeselectAll component="button" type="button" className="btn">
            Clear selection
          </DeselectAll>
        </div>
        <div className="albums">
          {items.map(item => (
            <SelectableCard key={item.year} player={item.player} year={item.year} />
          ))}
        </div>
      </div>
    )
  }
}

export default List
