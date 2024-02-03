import React, { Fragment } from 'react'
import { Menu, MenuButton, MenuList, IconButton, MenuItem, MenuDivider } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { EditOrgs, IconAction } from '.'
import { download, upload } from '../utils/url.js'

function Options({ orgs, setOrgs }) {
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
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }} onClick={() => download(orgs)}>Export Configuration</MenuItem>
          <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }} onClick={() => upload(setOrgs)}>Import Configuration</MenuItem>
        </MenuList>
      </Menu>
      <EditOrgs orgs={orgs} setOrgs={setOrgs} />
    </Fragment>
  )
}

export default Options
