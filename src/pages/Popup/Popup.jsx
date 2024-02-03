import React from 'react'
import { useChromeStorageLocal } from 'use-chrome-storage'
import { VStack, Box, Alert, AlertIcon } from '@chakra-ui/react'
import { OrgsList, Head, HeadLine, Options } from '../../components'

const Popup = () => {
  const [orgs, setOrgs, isPersistent, error] = useChromeStorageLocal('SalesforceOrgs', [])

  return (
    <VStack p={0} w='440px' minH='230px'>
      <Head>
        <HeadLine text='Salesforce Orgs' />
        <Options orgs={orgs} setOrgs={setOrgs} />
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
