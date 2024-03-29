import React from 'react'
import { Box } from '@chakra-ui/react'
import { IconContext } from 'react-icons'

function IconAction({ icon: Icon, action }) {
  return (
    <Box _hover={{ cursor: 'pointer' }}>
      <IconContext.Provider value={{ size: '28px' }}>{action ? <Icon onClick={action} /> : <Icon />}</IconContext.Provider>
    </Box>
  )
}

export default IconAction
