import React, { useState, useEffect } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, Input, Box, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { Btn, Bttn, IconAction, Head, HeadLine } from '.'
import { BiPlus, BiX } from 'react-icons/bi'
import { nanoid } from 'nanoid'
import { SALESFORCE_HOST, FORCE_HOST, extractHost, extractName, currentUrl } from '../utils/url.js'
import { defaultOrgColor } from '../utils/color.js'

function AddOrg({ addOrg }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalValue, setModalValue] = useState({})
  const [nameInvalid, setNameInvalid] = useState(false)
  const [urlInvalid, setUrlInvalid] = useState(false)

  const handleSubmit = ev => {
    ev.preventDefault()
    let formInvalid = false
    setUrlInvalid(false)
    setNameInvalid(false)

    if (modalValue.name === '') {
      setNameInvalid(true)
      formInvalid = true
    }

    if (modalValue.url === '' || (!modalValue.url.match(SALESFORCE_HOST) && !modalValue.url.match(FORCE_HOST))) {
      setUrlInvalid(true)
      formInvalid = true
    }

    if (!formInvalid) {
      modalValue.url = extractHost(modalValue.url)
      addOrg(modalValue)
      setIsOpen(false)
    }
  }

  async function handleAddClick() {
    setIsOpen(true)
    const url = await currentUrl()
    const name = url === '' ? '' : extractName(url)
    setModalValue({
      id: `sf-${nanoid()}`,
      name: name,
      url: url,
      color: defaultOrgColor
    })
  }

  function onClose() {
    setIsOpen(false)
    setUrlInvalid(false)
    setNameInvalid(false)
    setModalValue({})
  }

  function handleUrlChange(ev) {
    let url = extractHost(ev.target.value)
    setModalValue({ ...modalValue, url })
  }

  function handleUrlBlur(ev) {
    let url = ev.target.value
    if (url.match(SALESFORCE_HOST) || url.match(FORCE_HOST)) {
      let name = extractName(url)
      setModalValue({ ...modalValue, name })
    } else {
      setUrlInvalid(true)
    }
  }

  function handleNameChange(ev) {
    let name = ev.target.value
    setModalValue({ ...modalValue, name })
  }

  return (
    <>
      <Btn icon={<BiPlus/>} text='Add Org' action={handleAddClick} />
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <Head>
              <HeadLine text='Add Salesforce Org' />
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
                    isInvalid={urlInvalid}
                    focusBorderColor='gray.400'
                    onChange={handleUrlChange}
                    onBlur={handleUrlBlur}
                  />
                </InputGroup>
                <Input
                  size='sm'
                  value={modalValue.name}
                  key={modalValue.id}
                  variant='outline'
                  type='text'
                  placeholder='Org Alias'
                  _placeholder={{ opacity: 0.5 }}
                  isInvalid={nameInvalid}
                  focusBorderColor='gray.400'
                  onChange={handleNameChange}
                />
              </ModalBody>
              <ModalFooter p={0} mt={4}>
                <Bttn text='Add' type='submit' />
              </ModalFooter>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddOrg
