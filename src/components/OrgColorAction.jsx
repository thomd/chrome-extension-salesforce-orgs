import React, { useState } from 'react'
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  SimpleGrid,
  useBoolean,
} from '@chakra-ui/react'
import { colors } from '../utils/color'

function OrgColorAction({ org }) {
  const [isOpen, setIsOpen] = useBoolean()
  const [selectedColor, setSelectedColor] = useState(colors[0])

  const handleColorClick = color => {
    setIsOpen.toggle()
    setSelectedColor(color)
    console.log(color)
  }

  return (
    <Popover isOpen={isOpen} placement='right'>
      <PopoverTrigger>
        <Box h={4} w={4} bg={selectedColor} _hover={{ cursor: 'pointer' }} onClick={setIsOpen.toggle} />
      </PopoverTrigger>
      <PopoverContent w='auto' boxShadow='md'>
        <PopoverArrow />
        <SimpleGrid columns={4} p={1} spacing={1}>
          {colors.map((color, index) => (
            <Box
              key={`col-${index}`}
              h={4}
              w={4}
              p={1}
              bg={color}
              _hover={{ cursor: 'pointer' }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </SimpleGrid>
      </PopoverContent>
    </Popover>
  )
}

export default OrgColorAction
