import {
  HStack,
  Text,
  Flex,
  Divider,
} from '@chakra-ui/react'

import { TiPencil, TiDelete, TiThSmall } from 'react-icons/ti'
import React from 'react'
import OrgColorAction from './OrgColorAction'
import OrgAction from './OrgAction'
import OrgEditAction from './OrgEditAction'

function OrgsListItem({ org, deleteOrg, editOrg }) {

  return (
    <>
      <HStack w='100%'>
        <Flex w='100%' justifyContent='space-between'>
          <Flex color='gray.400' w='50px' justifyContent='space-between'>
            <OrgAction icon={TiDelete} color='red.500' org={org} action={deleteOrg} />
            <OrgEditAction org={org} editOrg={editOrg} />
            <OrgColorAction org={org} editOrg={editOrg} />
          </Flex>
          <Text fontSize='md' w='240px' noOfLines={1}>{org.name}</Text>
        </Flex>
      </HStack>
      <Divider orientation='horizontal' _last={{ display: 'none' }} />
    </>
  )
}

export default OrgsListItem


