import React, { Fragment } from 'react'
import { Menu, MenuButton, MenuList, IconButton, MenuItem, MenuDivider } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { IconAction } from '.'

function Options({ exportConfig, importConfig }) {
  return (
    <Fragment>
      <Menu>
        <MenuButton as={IconButton} aria-label='Options' icon={<IconAction icon={BiMenu} />} variant='ghost' _hover={{ bg: 'none' }} _active={{ bg: 'none' }} />
        <MenuList boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'>
          {/* <MenuItem>Add Org</MenuItem>
          <MenuItem>Edit Orgs</MenuItem>
          <MenuItem>Add Link</MenuItem>
          <MenuItem>Edit Links</MenuItem>
          <MenuDivider /> */}
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ bg: 'none', color: 'sf.headtc' }} _focus={{ bg: 'none' }} onClick={exportConfig}>Export Configuration</MenuItem>
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ bg: 'none', color: 'sf.headtc' }} onClick={importConfig}>Import Configuration</MenuItem>
        </MenuList>
      </Menu>
    </Fragment>
  )
}

export default Options
