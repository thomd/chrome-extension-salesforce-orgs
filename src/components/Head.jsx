import { Flex } from '@chakra-ui/react'
import React from 'react'

function Head({ children }) {
  return (
    <Flex w='100%' h='56px' p={3} mb={0} bg='sf.headbg' color='sf.mc' justifyContent='space-between' alignItems='center'>
      {children}
    </Flex>
  )
}

export default Head
