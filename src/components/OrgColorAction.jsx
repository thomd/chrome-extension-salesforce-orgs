import React, { useState } from 'react'
import { Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, SimpleGrid, useBoolean } from '@chakra-ui/react'
import { colors } from '../utils/color'

function OrgColorAction({ org, editOrg }) {
  const [isOpen, setIsOpen] = useBoolean()
  const [orgValue, setOrgValue] = useState(org)

  const handleColorClick = color => {
    setIsOpen.toggle()
    let updatedOrg ={ ...orgValue, color: color }
    setOrgValue(updatedOrg)
    editOrg(orgValue.id, updatedOrg)
  }

  return (
    <Popover isOpen={isOpen} placement='right'>
      <PopoverTrigger>
        <Box h={4} w={4} bg={orgValue.color} borderRadius={4} _hover={{ cursor: 'pointer' }} onClick={setIsOpen.toggle} />
      </PopoverTrigger>
      <PopoverContent w='auto' boxShadow='md'>
        <PopoverArrow />
        <SimpleGrid columns={4} p={1} spacing={1}>
          {colors.map((color, index) => (
            <Box
              key={`col-${index}`}
              h={4}
              w={4}
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
