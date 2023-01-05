import { Box } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import React from 'react'

function OrgAction({ icon: Icon, color, org, action }) {
  return (
    <Box w={5} h={5} _hover={{ color: color, stroke: color, cursor: 'pointer' }}>
      <IconContext.Provider value={{ size: '100%' }}>
        <Icon onClick={() => action(org)} />
      </IconContext.Provider>
    </Box>
  )
}

export default OrgAction
