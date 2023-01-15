import React from 'react'
import { useChromeStorageLocal } from 'use-chrome-storage'
import { VStack, Text, Flex, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import EditOrgs from '../../components/EditOrgs'
import AddOrg from '../../components/AddOrg'
import OrgsList from '../../components/OrgsList'

//
// Component Structure:
//
//    Popup
//    ├── EditOrgs
//    │   ├── Button
//    │   └── Modal
//    │        └── OrgsList
//    │            └── SortableList
//    │                └── OrgsListItem
//    │                    ├── OrgColorAction
//    │                    ├── OrgAction (Delete)
//    │                    └── OrgEditAction
//    ├── AddOrg
//    │   ├── Button
//    │   └── Modal
//    │       ├── Input
//    │       └── Input
//    └── OrgsList
//        └── OrgsListItem
//            ├── OrgAction (Home)
//            ├── OrgAction (Setup)
//            ├── OrgAction (Developer Console)
//            └── OrgAction (Store)
//

const Popup = () => {
  const [orgs, setOrgs, isPersistent, error] = useChromeStorageLocal('SalesforceOrgs', [])

  function deleteOrg(org) {
    const newOrgs = orgs.filter((item) => item.id !== org.id )
    setOrgs(newOrgs)
  }

  function addOrg(newOrg) {
    setOrgs([...orgs, newOrg])
  }

  function editOrg(id, updatedOrg) {
    const updatedItem = orgs.map((org) => org.id === id ? updatedOrg : org )
    setOrgs(updatedItem)
  }

  return (
    <VStack p={5} w='500px' minH='220px'>
      <Flex w='100%' mb={4} justifyContent='space-between'>
        <EditOrgs orgs={orgs} setOrgs={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} />
        <Text
          fontSize='2xl'
          fontFamily="'ITC Avant Garde','Helvetica Neue'"
          color='#032d60'
          fontWeight='bold'>Salesforce Orgs</Text>
        <AddOrg addOrg={addOrg}/>
      </Flex>
      <OrgsList items={orgs} setItems={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} />
      { error &&
      <Alert status='error'>
        <AlertIcon />Error: {error}
      </Alert>
      }
    </VStack>
  )
}

export default Popup
