import React, { Fragment } from 'react'
import { Menu, MenuButton, MenuList, IconButton, MenuItem, MenuDivider } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { IconAction } from '.'

function exportLocalStorage() {}

function Options({ exportOrgs }) {
  return (
    <Fragment>
      <Menu>
        <MenuButton as={IconButton} aria-label='Options' icon={<IconAction icon={BiMenu} />} variant='ghost' _hover={{ bg: 'none' }} _active={{ bg: 'none' }} />
        <MenuList>
          {/* <MenuItem>Add Org</MenuItem>
          <MenuItem>Edit Orgs</MenuItem>
          <MenuItem>Add Link</MenuItem>
          <MenuItem>Edit Links</MenuItem>
          <MenuDivider /> */}
          <MenuItem onClick={exportOrgs}>Export as JSON</MenuItem>
          <MenuItem>Import JSON</MenuItem>
        </MenuList>
      </Menu>
    </Fragment>
  )
}

export default Options
