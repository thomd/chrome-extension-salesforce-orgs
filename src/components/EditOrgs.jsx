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
import { BiMenu } from 'react-icons/bi'
import { TiChevronLeftOutline } from 'react-icons/ti'
import OrgsList from './OrgsList'


function EditOrgs({ orgs, setOrgs, deleteOrg, editOrg }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleEditClick() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
  }

  return (
    <>
      <Button leftIcon={<BiMenu />} size='sm' onClick={handleEditClick}>Edit</Button>
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent p={5}>
            <ModalBody p={0}>
              <Button leftIcon={<TiChevronLeftOutline />} size='sm' variant='outline' onClick={onClose}>Back</Button>
              <OrgsList items={orgs} setItems={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} />
            </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
  }

export default EditOrgs
