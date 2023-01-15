import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ButtonGroup,
  Input
} from '@chakra-ui/react'

import OrgAction from './OrgAction'
import React, { useState } from 'react'
import { TiChevronLeftOutline } from 'react-icons/ti'


function EditOrg({ icon, color, org, editOrg }) {

  const [isOpen, setIsOpen] = useState(false)
  const [modalValue, setModalValue] = useState({})

  function handleEditClick(org) {
    setIsOpen(true)
    setModalValue(org)
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    editOrg(modalValue.id, modalValue)
    setModalValue('')
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
      <OrgAction icon={icon} color={color} org={org} action={handleEditClick} />

      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='md'>Edit Your Org</ModalHeader>
          <form onSubmit={handleEditSubmit}>

            <ModalBody>
              <Input
                size='sm'
                mb={3}
                value={modalValue.name}
                key={modalValue.id}
                variant='outline'
                type='text'
                onChange={handleNameChange}
              />
              <Input
                size='sm'
                value={modalValue.url}
                key={modalValue.id}
                variant='outline'
                type='text'
                onChange={handleUrlChange}
              />
            </ModalBody>

            <ModalFooter>
              <ButtonGroup size='sm' spacing='4'>
                <Button leftIcon={<TiChevronLeftOutline />} variant='outline' onClick={onClose}>Back</Button>
                <Button type='submit'>Update</Button>
              </ButtonGroup>
            </ModalFooter>

          </form>
        </ModalContent>
      </Modal>
    </>
    )
  }

export default EditOrg
