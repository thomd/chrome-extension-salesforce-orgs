import React, { useState, Fragment } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import { BiMenu, BiX } from 'react-icons/bi'
import { OrgsListEditable, Head, HeadLine, IconAction } from '.'

function EditOrgs({ orgs, setOrgs, deleteOrg, editOrg }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleEditClick() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
  }

  return (
    <Fragment>
      <IconAction icon={BiMenu} action={handleEditClick} />
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <Head>
            <HeadLine text='Salesforce Orgs' />
            <IconAction icon={BiX} action={onClose} />
          </Head>
          <ModalBody p={4} mt={4}>
            <OrgsListEditable items={orgs} setItems={setOrgs} deleteOrg={deleteOrg} editOrg={editOrg} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default EditOrgs
