import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
} from '@chakra-ui/react'

import { IconContext } from 'react-icons'
import { TiHomeOutline, TiCogOutline, TiDocumentText, TiShoppingCart, TiEdit, TiDelete } from 'react-icons/ti'
import React, { useState } from 'react'
import OrgAction from './OrgAction'
import OrgEditAction from './OrgEditAction'


function OrgList({ orgs, deleteOrg, editOrg }) {

  const [org, setOrg] = useState('')

  function openHome(org) {
    open(org.url)
  }

  function openSetup(org) {
    open(org.url)
  }

  function openDeveloperConsole(org) {
    open(org.url)
  }

  function openStore(org) {
    open(org.url)
  }

  function open(url) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let tab = tabs[0]
      if (tab.url === 'chrome://newtab/') {
        window.close()
        chrome.tabs.update(tab.id, { url })
      } else {
        chrome.tabs.create({ url })
      }
    })
  }

  return !orgs.length ? (
    <Badge variant='outline' borderRadius='2' p='2' m='2'>No Orgs</Badge>
  ) : (
    <VStack w='100%'>
      {orgs.map((org) => (
        <HStack key={org.id} w='100%'>
          <Flex py={1} w='100%' justifyContent='space-between'>
            <Flex color='gray.400' w='10%' justifyContent='space-between'>
              <OrgAction icon={TiDelete} color='red' org={org} action={deleteOrg} />
              <OrgEditAction icon={TiEdit} color='blue' org={org} editOrg={editOrg} />
            </Flex>
            <Text fontSize="md">{org.name}</Text>
            <Flex color='gray.400' w='20%' justifyContent='space-between'>
              <OrgAction icon={TiHomeOutline} color='black' org={org} action={openHome} />
              <OrgAction icon={TiCogOutline} color='black' org={org} action={openSetup} />
              <OrgAction icon={TiDocumentText} color='black' org={org} action={openDeveloperConsole} />
              <OrgAction icon={TiShoppingCart} color='black' org={org} action={openStore} />
            </Flex>
          </Flex>
        </HStack>
      ))}
    </VStack>
  )
}

export default OrgList

