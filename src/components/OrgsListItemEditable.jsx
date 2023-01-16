import React from 'react'
import { HStack, Text, Flex } from '@chakra-ui/react'
import { TiPencil, TiDelete, TiThSmall } from 'react-icons/ti'
import { OrgColorAction, OrgAction, OrgEditAction } from '.'

function OrgsListItem({ org, deleteOrg, editOrg }) {

  return (
    <>
      <Flex color='gray.400' w='50px' justifyContent='space-between'>
        <OrgAction icon={TiDelete} color='red.500' org={org} action={deleteOrg} />
        <OrgEditAction org={org} editOrg={editOrg} />
        <OrgColorAction org={org} editOrg={editOrg} />
      </Flex>
      <Text fontSize='md' w='240px' noOfLines={1}>{org.name}</Text>
    </>
  )
}

export default OrgsListItem


