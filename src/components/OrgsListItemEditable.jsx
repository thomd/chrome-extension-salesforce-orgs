import React, { Fragment } from 'react'
import { HStack, Text, Flex } from '@chakra-ui/react'
import { TiPencil, TiDelete, TiThSmall } from 'react-icons/ti'
import { OrgColorAction, OrgAction, OrgEditAction } from '.'

function OrgsListItem({ org, deleteOrg, editOrg }) {

  return (
    <Fragment>
      <Flex color='gray.400' mx={3} w='74px' justifyContent='space-between' alignItems='center'>
        <OrgColorAction org={org} editOrg={editOrg} />
        <OrgAction icon={TiDelete} color='red.400' org={org} action={deleteOrg} />
        <OrgEditAction org={org} editOrg={editOrg} />
      </Flex>
      <Text fontSize='md' ml={2} w='240px' noOfLines={1}>{org.name}</Text>
    </Fragment>
  )
}

export default OrgsListItem


