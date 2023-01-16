import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function Btn({ icon, text, action, ...props }) {
  return (
    <Button
      leftIcon={icon}
      size='sm'
      variant='outline'
      bg='gray.50'
      boxShadow='base'
      _hover={{ bg: 'gray.200' }}
      onClick={action}
      {...props}
    >
      {text}
    </Button>
  )
}

function Bttn({ icon, text, action, ...props }) {
  return (
    <Button
      leftIcon={icon}
      size='sm'
      variant='solid'
      bg='gray.100'
      boxShadow='base'
      border='1px solid'
      borderColor='gray.300'
      _hover={{ bg: 'gray.200' }}
      onClick={action}
      {...props}
    >
      {text}
    </Button>
  )
}

export {
  Btn,
  Bttn,
}
