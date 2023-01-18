import { Box, Tooltip } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import React from 'react'

function OrgAction({ icon: Icon, color, org, action, label }) {
  return (
    <Tooltip label={label} openDelay={500} placement='top-end' hasArrow bg='sf.btnpbg'>
      <Box w={5} h={5} _hover={{ color: color, stroke: color, cursor: 'pointer' }}>
        <IconContext.Provider value={{ size: '100%' }}>
          <Icon onClick={() => action(org)} />
        </IconContext.Provider>
      </Box>
    </Tooltip>
  )
}

export default OrgAction
