import React from 'react'
import { useChromeStorageLocal } from 'use-chrome-storage'
import { VStack, Text, Flex, Box, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { EditOrgs, AddOrg, OrgsList, Head, HeadLine } from '../../components'

//
// Components Structure:
//
//    Popup
//    ├── EditOrgs
//    │   ├── Button
//    │   └── Modal
//    │        └── OrgsListEditable
//    │            └── SortableList
//    │                └── OrgsListItemEditable
//    │                    ├── OrgColorAction
//    │                    ├── OrgAction:Delete
//    │                    └── OrgEditAction
//    │                        └── Modal
//    │                            ├── Input
//    │                            └── Input
//    ├── AddOrg
//    │   ├── Button
//    │   └── Modal
//    │       ├── Input
//    │       └── Input
//    └── OrgsList
//        └── OrgsListItem
//            ├── OrgAction:Home
//            ├── OrgAction:Setup
//            ├── OrgAction:DeveloperConsole
//            └── OrgAction:Store
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
    <VStack p={0} w='440px' minH='230px'>
      <Head>
        <HeadLine text='Salesforce Orgs' />
        { orgs.length > 0 && <EditOrgs orgs={orgs} setOrgs={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} addOrg={addOrg} /> }
      </Head>
      <Box w='100%' p={4}>
        <OrgsList items={orgs} />
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
