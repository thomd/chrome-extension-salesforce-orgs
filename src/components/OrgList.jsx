import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Input
} from '@chakra-ui/react'

import { IconContext } from 'react-icons'
import { TiHomeOutline, TiCogOutline, TiDocumentText, TiShoppingCart, TiEdit, TiDelete } from 'react-icons/ti'
import React, { useState } from 'react'
import OrgAction from './OrgAction'


function OrgList({ orgs, deleteOrg, editOrg }) {

  const [org, setOrg] = useState('')
  const [modalValue, setModalValue] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  function handleEditClick(org) {
    setIsOpen(true)
    setModalValue(org)
  }

  function handleEditInputChange(e, id) {
    setModalValue({ ...modalValue, text: e.target.value })
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    editOrg(modalValue.id, modalValue)
    setModalValue('')
    setIsOpen(false)
  }

  function openHome(org) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let tab = tabs[0]
      if (tab.url === 'chrome://newtab/') {
        window.close()
        chrome.tabs.update(tab.id, { url: org.url })
      } else {
        chrome.tabs.create({ url: org.url })
      }
    })
  }

  function openSetup(org) {
    chrome.tabs.create({ url: org.url })
  }

  function openDeveloperConsole(org) {
    chrome.tabs.create({ url: org.url })
  }

  function openStore(org) {
    chrome.tabs.create({ url: org.url })
  }

  return !orgs.length ? (
    <Badge variant='outline' borderRadius='2' p='2' m='2'>No Orgs</Badge>
  ) : (
    <VStack w='100%'>
      {orgs.map((org) => (
        <HStack key={org.id} w='100%'>
          <Flex py={1} w='100%' justifyContent='space-between'>
            <Flex color='gray.500' w='10%' justifyContent='space-between'>
              <OrgAction icon={TiDelete} color='red' org={org} action={deleteOrg} />
              <OrgAction icon={TiEdit} color='blue' org={org} action={handleEditClick} />
            </Flex>
            <Text fontSize="md">{org.name}</Text>
            <Flex color='gray.500' w='20%' justifyContent='space-between'>
              <OrgAction icon={TiHomeOutline} color='blue' org={org} action={openHome} />
              <OrgAction icon={TiCogOutline} color='blue' org={org} action={openSetup} />
              <OrgAction icon={TiDocumentText} color='blue' org={org} action={openDeveloperConsole} />
              <OrgAction icon={TiShoppingCart} color='blue' org={org} action={openStore} />
            </Flex>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose} size='full' motionPreset='none'>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Your Org</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleEditSubmit}>
                <ModalBody>
                  <Input value={modalValue.text}
                    key={modalValue.id}
                    variant='outline'
                    type='text'
                    placeholder='Update your Org ...'
                    onChange={handleEditInputChange} />
                </ModalBody>
                <ModalFooter>
                  <Button mr={3} onClick={onClose}>Close</Button>
                  <Button type='submit' mr={3}>Update</Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>

        </HStack>
      ))}
    </VStack>
  )
}

export default OrgList

