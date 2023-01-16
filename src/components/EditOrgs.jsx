import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ButtonGroup,
  Input,
  Flex,
} from '@chakra-ui/react'

import OrgAction from './OrgAction'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { TiChevronLeftOutline } from 'react-icons/ti'
import { OrgsListEditable, Btn } from '.'

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
      <Btn icon={<BiMenu/>} text='Edit' action={handleEditClick} />
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <Flex w='100%' p={3} mb={0} bg='gray.100' justifyContent='left'>
            <ButtonGroup size='sm' spacing='4'>
              <Btn icon={<TiChevronLeftOutline/>} text='Back' action={onClose} />
            </ButtonGroup>
          </Flex>
          <ModalBody p={0}>
            <OrgsListEditable items={orgs} setItems={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditOrgs
