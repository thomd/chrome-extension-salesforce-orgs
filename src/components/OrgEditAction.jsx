import React, { useState, Fragment } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Input, Box, InputGroup, InputLeftAddon, FormControl, FormLabel, Switch, Flex } from '@chakra-ui/react'
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

  function handleNameChange(ev) {
    setModalValue({ ...modalValue, name: ev.target.value })
  }

  function handleUrlChange(ev) {
    setModalValue({ ...modalValue, url: ev.target.value })
  }

  function handleSiteChange(ev) {
    setModalValue({ ...modalValue, site: ev.target.checked })
  }

  return (
    <Fragment>
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
                <InputGroup size='md'>
                  <InputLeftAddon children='https://' />
                  <Input
                    mb={3}
                    value={modalValue.url}
                    key={modalValue.id}
                    variant='outline'
                    type='text'
                    focusBorderColor='gray.400'
                    onChange={handleUrlChange}
                  />
                </InputGroup>
                <Input
                  value={modalValue.name}
                  key={modalValue.id}
                  variant='outline'
                  type='text'
                  placeholder='Org Alias'
                  _placeholder={{ opacity: 0.6 }}
                  focusBorderColor='gray.400'
                  onChange={handleNameChange}
                />
                <FormControl display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                  <Flex w='100%' alignItems='center'>
                    <FormLabel mt={2} ml={2}>Experience Site?</FormLabel>
                    <Switch isChecked={modalValue.site} onChange={handleSiteChange} />
                  </Flex>
                  <Bttn text='Save' type='submit' />
                </FormControl>
              </ModalBody>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default EditOrgAction
