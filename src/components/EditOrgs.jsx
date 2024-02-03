import React, { useState, Fragment } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, MenuItem } from '@chakra-ui/react'
import { BiX } from 'react-icons/bi'
import { OrgsListEditable, Head, HeadLine, IconAction } from '.'

function EditOrgs({ orgs, setOrgs }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleEditClick() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
  }

  return (
    <Fragment>
      <MenuItem fontSize='sm' fontWeight='bold' color='gray.400' _hover={{ color: 'sf.headtc' }} onClick={handleEditClick}>Edit Orgs</MenuItem>
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <Head>
            <HeadLine text='Edit Salesforce Orgs' />
            <IconAction icon={BiX} action={onClose} />
          </Head>
          <ModalBody p={4} mt={4}>
            <OrgsListEditable orgs={orgs} setOrgs={setOrgs} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default EditOrgs
