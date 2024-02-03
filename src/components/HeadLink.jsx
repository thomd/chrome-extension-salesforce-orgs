import { Link } from '@chakra-ui/react'
import React from 'react'

function HeadLink({ text, action, ...props }) {
  return (
    <Link fontSize='lg' color='sf.mc' mx={1} _hover={{ textDecoration: 'none' }} onClick={action} {...props}>
      {text}
    </Link>
  )
}

export default HeadLink
