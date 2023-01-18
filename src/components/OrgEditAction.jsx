import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  Box,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react'
import { TiPencil } from 'react-icons/ti'
import { BiX } from 'react-icons/bi'
import { OrgAction, Bttn, Head, HeadLine, IconAction } from '.'


function EditOrgAction({ org, editOrg }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalValue, setModalValue] = useState({})

  function handleEditClick(org) {
    setIsOpen(true)
    setModalValue(org)
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    editOrg(modalValue.id, modalValue)
    setModalValue({})
    setIsOpen(false)
  }

  function onClose() {
    setIsOpen(false)
  }

  function handleNameChange(e, id) {
    setModalValue({ ...modalValue, name: e.target.value })
  }

  function handleUrlChange(e, id) {
    setModalValue({ ...modalValue, url: e.target.value })
  }

  return (
    <>
      <OrgAction icon={TiPencil} color='blue.500' org={org} action={handleEditClick} />
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleEditSubmit}>
            <Head>
              <HeadLine text='Edit Salesforce Org' />
              <IconAction icon={BiX} action={onClose} />
            </Head>
            <Box w='100%' p={4}>
              <ModalBody p={0}>
                <InputGroup size='sm'>
                  <InputLeftAddon children='https://' />
                  <Input
                    size='sm'
                    mb={3}
                    value={modalValue.url}
                    key={modalValue.id}
                    variant='outline'
                    type='text'
                    placeholder='*.my.salesforce.com'
                    _placeholder={{ opacity: 0.5 }}
                    focusBorderColor='gray.400'
                    onChange={handleUrlChange}
                  />
                </InputGroup>
                <Input
                  size='sm'
                  mb={3}
                  value={modalValue.name}
                  key={modalValue.id}
                  variant='outline'
                  type='text'
                  placeholder='Org Alias'
                  _placeholder={{ opacity: 0.5 }}
                  focusBorderColor='gray.400'
                  onChange={handleNameChange}
                />
              </ModalBody>
              <ModalFooter p={0}>
                <Bttn text='Save' type='submit' />
              </ModalFooter>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditOrgAction
