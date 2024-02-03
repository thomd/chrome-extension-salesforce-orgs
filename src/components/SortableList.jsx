import React from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function SortableList(props) {
  console.log('props: ', props)
  const { items, setItems, children } = props
  console.log('items: ', items)
  console.log('setItems: ', setItems)
  console.log('children: ', children)
  const sensors = useSensors(useSensor(PointerSensor))

  function handleDragEnd(event) {
    const { active, over } = event
    if (active.id !== over.id) {
      setItems(items => {
        const ids = items.map(item => item.id)
        const oldIndex = ids.indexOf(active.id)
        const newIndex = ids.indexOf(over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children({ items })}
      </SortableContext>
    </DndContext>
  )
}

export default SortableList
