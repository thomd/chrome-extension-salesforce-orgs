import { Button } from '@chakra-ui/react'
import React from 'react'

function Btn({ icon, text, action, ...props }) {
  return (
    <Button
      size='sm'
      leftIcon={icon}
      variant='outline'
      bg='sf.btnsbg'
      color='sf.btnstc'
      borderColor='sf.btnsbc'
      _hover={{ opacity: 0.7 }}
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
      bg='sf.btnpbg'
      color='sf.btnptc'
      borderColor='sf.btnpbc'
      _hover={{ opacity: 0.7 }}
      onClick={action}
      {...props}
    >
      {text}
    </Button>
  )
}

export { Btn, Bttn }
