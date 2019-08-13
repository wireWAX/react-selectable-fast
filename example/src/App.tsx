import React, { createRef, Component } from 'react'

import { TAlbumItem } from './sample-data'
import { SelectableGroup } from '../../src'
import Counters from './Counters'
import List from './List'

type TAppProps = {
  items: TAlbumItem[]
}

class App extends Component<TAppProps> {
  state = {
    disableFirstRow: false,
    reversed: false
  }

  countersRef = createRef<Counters>()

  handleSelecting = selectingItems => {
    this.countersRef.current.handleSelecting(selectingItems)
  }

  handleSelectionFinish = selectedItems => {
    this.countersRef.current.handleSelectionFinish(selectedItems)
  }

  handleSelectionClear() {
    console.log('Cancel selection')
  }

  toggleFirstRow = () => {
    this.setState({ disableFirstRow: !this.state.disableFirstRow })
  }

  toggleOrder = () => {
    this.setState({ reversed: !this.state.reversed })
  }

  getSelectableGroupRef = (ref: SelectableGroup | null) => {
    ;(window as any).selectableGroup = ref
  }

  render() {
    const { items } = this.props
    const { disableFirstRow, reversed } = this.state

    const itemsToRender = disableFirstRow ? items.slice(5) : items
    const orderedItems = reversed ? itemsToRender.slice().reverse() : itemsToRender

    return (
      <div>
        <Counters ref={this.countersRef} />
        <button className="btn" type="button" onClick={this.toggleFirstRow}>
          Toggle first row
        </button>
        <button className="btn" type="button" onClick={this.toggleOrder}>
          Toggle order
        </button>
        <SelectableGroup
          ref={this.getSelectableGroupRef}
          className="main"
          clickClassName="tick"
          enableDeselect={true}
          tolerance={0}
          deselectOnEsc={true}
          allowClickWithoutSelected={false}
          duringSelection={this.handleSelecting}
          onSelectionClear={this.handleSelectionClear}
          onSelectionFinish={this.handleSelectionFinish}
          ignoreList={['.not-selectable']}
        >
          <List items={orderedItems} />
        </SelectableGroup>
      </div>
    )
  }
}

export default App
