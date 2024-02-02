import React from 'react'
import { useChromeStorageLocal } from 'use-chrome-storage'
import { VStack, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { EditOrgs, OrgsList, Head, HeadLine, Options } from '../../components'
import { download, upload } from '../../utils/url.js'

const Popup = () => {
  const [orgs, setOrgs, isPersistent, error] = useChromeStorageLocal('SalesforceOrgs', [])

  function deleteOrg(org) {
    const newOrgs = orgs.filter(item => item.id !== org.id)
    setOrgs(newOrgs)
  }

  function addOrg(newOrg) {
    setOrgs([...orgs, newOrg])
  }

  function editOrg(id, updatedOrg) {
    const updatedItem = orgs.map(org => (org.id === id ? updatedOrg : org))
    setOrgs(updatedItem)
  }

  function exportConfig() {
    download(orgs)
  }

  function importConfig() {
    upload(setOrgs)
  }

  return (
    <VStack p={0} w='440px' minH='230px'>
      <Head>
        <HeadLine text='Salesforce Orgs' />
        <EditOrgs orgs={orgs} setOrgs={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} addOrg={addOrg} />
        <Options exportConfig={exportConfig} importConfig={importConfig} />
      </Head>
      <Box w='100%' p={4}>
        <OrgsList items={orgs} />
        {!isPersistent && (
          <Alert status='error'>
            <AlertIcon />
            Error writing to the chrome.storage: {error}
          </Alert>
        )}
      </Box>
    </VStack>
  )
}

export default Popup
