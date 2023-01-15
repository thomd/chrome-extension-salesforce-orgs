import {
  HStack,
  Text,
  Flex,
  Divider,
} from '@chakra-ui/react'

import { TiPencil, TiDelete, TiThSmall } from 'react-icons/ti'
import React, { useState } from 'react'
import { SortableList, SortableItem } from '@thaddeusjiang/react-sortable-list'
import OrgAction from './OrgAction'
import OrgEditAction from './OrgEditAction'

const DragHandler = (props) => (
  <div {...props}>
    <TiThSmall />
  </div>
)

function OrgsListItem({ org, deleteOrg, editOrg }) {

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
          <Flex color='gray.400' w='50px' justifyContent='space-between'>
            <OrgAction icon={TiDelete} color='red.500' org={org} action={deleteOrg} />
            <OrgEditAction icon={TiPencil} color='blue.500' org={org} editOrg={editOrg} />
          </Flex>
          <Text fontSize='md' w='240px' noOfLines={1}>{org.name}</Text>
        </Flex>
      </HStack>
      <Divider orientation='horizontal' _last={{ display: 'none' }} />
    </>
  )
}

export default OrgsListItem


