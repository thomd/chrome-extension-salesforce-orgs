import React from 'react'
import { useChromeStorageLocal } from 'use-chrome-storage'
import { VStack, Text, Flex, Box, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { EditOrgs, AddOrg, OrgsList } from '../../components'

//
// Component Structure:
//
//    Popup
//    ├── EditOrgs
//    │   ├── Button
//    │   └── Modal
//    │        └── OrgsListEditable
//    │            └── SortableList
//    │                └── OrgsListItemEditable
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
    <VStack p={0} w='500px' minH='220px'>
      <Flex w='100%' p={3} mb={0} backgroundColor='gray.100' justifyContent='space-between'>
        <EditOrgs orgs={orgs} setOrgs={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} />
        <Text
          fontSize='xl'
          color='gray.400'
          fontWeight='bold'>Salesforce B2B Orgs</Text>
        <AddOrg addOrg={addOrg}/>
      </Flex>
      <Box w='100%' p={4}>
        <OrgsList items={orgs} deleteOrg={deleteOrg} editOrg={editOrg} />
        { error &&
        <Alert status='error'>
          <AlertIcon />Error: {error}
        </Alert>
        }
      </Box>
    </VStack>
  )
}

export default Popup
