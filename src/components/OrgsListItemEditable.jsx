import React, { Fragment } from 'react'
import { Text, Flex } from '@chakra-ui/react'
import { TiDelete } from 'react-icons/ti'
import { OrgColorAction, OrgAction, OrgEditAction } from '.'

function deleteOrg(org, orgs, setOrgs) {
  const newOrgs = orgs.filter(item => item.id !== org.id)
  setOrgs(newOrgs)
}

function editOrg(orgs, setOrgs) {
  return (id, updatedOrg) => {
    const updatedItem = orgs.map(org => (org.id === id ? updatedOrg : org))
    setOrgs(updatedItem)
  }
}

function OrgsListItemEditable({ org, orgs, setOrgs }) {
  return (
    <Fragment>
      <Flex color='gray.400' mx={3} w='74px' justifyContent='space-between' alignItems='center'>
        <OrgColorAction org={org} editOrg={() => editOrg(orgs, setOrgs)} />
        <OrgAction icon={TiDelete} color='red.400' org={org} action={() => deleteOrg(org, orgs, setOrgs)} />
        <OrgEditAction org={org} editOrg={() => editOrg(orgs, setOrgs)} />
      </Flex>
      <Text fontSize='md' ml={2} fontWeight='bold' color='gray.600' w='240px' noOfLines={1}>
        {org.name}
      </Text>
    </Fragment>
  )
}

export default OrgsListItemEditable
