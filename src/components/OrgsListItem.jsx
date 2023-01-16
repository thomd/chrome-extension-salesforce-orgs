import React, { useState } from 'react'
import { HStack, Text, Flex, Divider } from '@chakra-ui/react'
import { TiHomeOutline, TiCogOutline, TiDocumentText, TiShoppingCart, TiThSmall } from 'react-icons/ti'
import { OrgAction } from '.'

function OrgsListItem({ org, deleteOrg, editOrg }) {

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

  return (
    <>
      <HStack w='100%'>
        <Flex w='100%' justifyContent='space-between'>
          <Text fontSize='md' w='240px' noOfLines={1}>{org.name}</Text>
          <Flex color='gray.400' w='110px' justifyContent='space-between'>
            <OrgAction icon={TiHomeOutline} color='black' org={org} action={openHome} />
            <OrgAction icon={TiCogOutline} color='black' org={org} action={openSetup} />
            <OrgAction icon={TiDocumentText} color='black' org={org} action={openDeveloperConsole} />
            <OrgAction icon={TiShoppingCart} color='black' org={org} action={openStore} />
          </Flex>
        </Flex>
      </HStack>
      <Divider orientation='horizontal' _last={{ display: 'none' }} />
    </>
  )
}

export default OrgsListItem


