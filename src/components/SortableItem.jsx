import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { TiThSmall } from 'react-icons/ti'
import { Flex, Box } from '@chakra-ui/react'
import { IconContext } from 'react-icons'

function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Flex ref={setNodeRef} style={style} w='100%' alignItems='center'>
      <Box w={4} h={4} color='gray.400' {...attributes} {...listeners}>
        <IconContext.Provider value={{ size: '100%' }}>
          <TiThSmall />
        </IconContext.Provider>
      </Box>
      {props.children}
    </Flex>
  )
}

export default SortableItem
