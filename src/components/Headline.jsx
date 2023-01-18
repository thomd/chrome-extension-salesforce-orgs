import { Text } from '@chakra-ui/react'
import React from 'react'

function HeadLine({ text, ...props }) {
  return (
    <Text fontSize='lg' color='sf.headtc' fontWeight='bold' w='50%' ml={2} {...props}>
      {text}
    </Text>
  )
}

export default HeadLine
