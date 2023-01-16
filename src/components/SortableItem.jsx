import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { TiThSmall } from 'react-icons/ti'

const DragHandler = props => (
  <div {...props}>
    <TiThSmall />
  </div>
)

function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: 'flex',
  }

  return (
    <div ref={setNodeRef} style={style}>
      <DragHandler {...attributes} {...listeners} />
      {props.children}
    </div>
  )
}

export default SortableItem
