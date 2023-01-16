import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { TiThSmall } from 'react-icons/ti'
import { Flex, Box } from '@chakra-ui/react'

function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Flex ref={setNodeRef} style={style}>
      <Box {...attributes} {...listeners}>
        <TiThSmall />
      </Box>
      {props.children}
    </Flex>
  )
}

export default SortableItem
