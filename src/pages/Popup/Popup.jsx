import React, { useState } from 'react'
import { useChromeStorageLocal } from 'use-chrome-storage'
import { VStack, Box, Flex } from '@chakra-ui/react'
import { OrgsList, LinksList, Head, HeadLink, Options } from '../../components'
import { defaultLinks } from '../../utils/defaultLinks.js'

const Popup = () => {
  const [orgs, setOrgs] = useChromeStorageLocal('SalesforceOrgs', [])
  const [links, setLinks] = useChromeStorageLocal('SalesforceLinks', [])
  const [isOpen, setOpen] = useState(true)

  return (
    <VStack p={0} w='440px' minH='230px'>
      <Head>
        <Flex w='100%'>
          <HeadLink
            fontWeight={isOpen ? 'bold' : 'normal'}
            action={() => {
              setOpen(true)
            }}
            text='Salesforce Orgs'
          />
          <HeadLink
            mx={5}
            fontWeight={isOpen ? 'normal' : 'bold'}
            action={() => {
              setOpen(false)
            }}
            text='Links'
          />
        </Flex>
        <Options orgs={orgs} setOrgs={setOrgs} />
      </Head>
      <Box w='100%' p={4}>
        {isOpen ? <OrgsList items={orgs} /> : <LinksList defaultLinks={defaultLinks} links={links} />}
      </Box>
    </VStack>
  )
}

export default Popup
