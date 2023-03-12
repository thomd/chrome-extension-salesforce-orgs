import React, { useState, Fragment } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Input, Box, Tooltip, FormControl, Flex } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { Bttn, IconAction, Head, HeadLine } from '.'
import { BiX } from 'react-icons/bi'

function OrgActionIdModal({ icon: Icon, color, org, action, label }) {
  const [isOpen, setIsOpen] = useState(false)
  const [objectId, setObjectId] = useState('')

  const handleSubmit = ev => {
    ev.preventDefault()
    action(org, objectId)
    setIsOpen(false)
  }

  function handleClick() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
    setObjectId('')
  }

  const handleIdChange = ev => {
    setObjectId(ev.target.value)
  }

  return (
    <Fragment>
      <Tooltip label={label} openDelay={500} placement='top-end' hasArrow bg='sf.btnpbg'>
        <Box w={5} h={5} _hover={{ color: color, stroke: color, cursor: 'pointer' }}>
          <IconContext.Provider value={{ size: '100%' }}>
            <Icon onClick={handleClick} />
          </IconContext.Provider>
        </Box>
      </Tooltip>
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <Head>
              <HeadLine text='Enter Object ID' />
              <IconAction icon={BiX} action={onClose} />
            </Head>
            <Box w='100%' p={4}>
              <ModalBody p={0}>
                <Input
                  value={objectId}
                  key='objectId'
                  variant='outline'
                  type='text'
                  placeholder='Object ID'
                  _placeholder={{ opacity: 0.6 }}
                  focusBorderColor='gray.400'
                  onChange={handleIdChange}
                />
                <FormControl display='flex' mt={2} alignItems='center' justifyContent='right'>
                  <Bttn text='Open' type='submit' />
                </FormControl>
              </ModalBody>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default OrgActionIdModal
