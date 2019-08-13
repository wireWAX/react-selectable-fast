import React, { Component } from 'react'

import { TAlbumItem } from './sample-data'
import { DeselectAll, SelectAll } from '../../src'
import SelectableAlbum from './Album'

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
        <div>
          <SelectAll component="button" type="button" className="selectable-button">
            Select all
          </SelectAll>
          <DeselectAll component="button" type="button" className="selectable-button">
            Clear selection
          </DeselectAll>
        </div>
        <div className="albums">
          {items.map(item => (
            <SelectableAlbum key={item.year} title={item.title} year={item.year} />
          ))}
        </div>
      </div>
    )
  }
}

export default List
