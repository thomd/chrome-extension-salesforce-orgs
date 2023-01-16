import React from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

function SortableList(props) {
  const { items, setItems, children, itemRender } = props

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children({ items })}
      </SortableContext>
    </DndContext>
  )

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
}

export default SortableList
