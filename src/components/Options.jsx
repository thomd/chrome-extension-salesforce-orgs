import React, { Fragment } from 'react'
import { Menu, MenuButton, MenuList, IconButton, MenuItem, MenuDivider } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { IconAction } from '.'

function Options({ exportConfig, importConfig }) {
  return (
    <Fragment>
      <Menu>
        <MenuButton as={IconButton} aria-label='Options' icon={<IconAction icon={BiMenu} />} variant='ghost' _hover={{ bg: 'none' }} _active={{ bg: 'none' }} />
        <MenuList borderWidth={2} borderColor='gray.300'>
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }}>Add Org</MenuItem>
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }}>Edit Orgs</MenuItem>
          {/* <MenuDivider />
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }}>Add Link</MenuItem>
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }}>Edit Links</MenuItem> */}
          <MenuDivider />
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }} onClick={exportConfig}>Export Configuration</MenuItem>
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }} onClick={importConfig}>Import Configuration</MenuItem>
        </MenuList>
      </Menu>
    </Fragment>
  )
}

export default Options
