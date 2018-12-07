import React, { Component } from 'react'
import { SelectAll, DeselectAll } from '../src'
import SelectableAlbum from './Album'

class List extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.items !== this.props.items
  }

  render() {
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
          {this.props.items.map(item => (
            <SelectableAlbum key={item.year} title={item.title} year={item.year} />
          ))}
        </div>
      </div>
    )
  }
}

export default List
