import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ButtonGroup,
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { TiChevronLeftOutline } from 'react-icons/ti'
import { nanoid } from 'nanoid'
import { SALESFORCE_HOST, sanitizeUrl, extractHost, extractName } from '../utils/url.js'


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

    if (modalValue.url === '' || !modalValue.url.match(SALESFORCE_HOST)) {
      setUrlInvalid(true)
      formInvalid = true
    }

    if (!formInvalid) {
      modalValue.url = sanitizeUrl(modalValue.url)
      addOrg(modalValue)
      setIsOpen(false)
    }
  }

  function handleAddClick() {
    setIsOpen(true)
    setModalValue({
      id: nanoid(),
      name: '',
      url: ''
    })
  }

  function onClose() {
    setIsOpen(false)
  }

  function handleUrlChange(ev) {
    let url = extractHost(ev.target.value)
    setModalValue({ ...modalValue, url })
  }

  function handleUrlBlur(ev) {
    let url = ev.target.value
    if (url.match(SALESFORCE_HOST)) {
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
      <Button leftIcon={<BiPlus />} size='sm' variant='outline' borderColor='gray.300' onClick={handleAddClick}>Add Org</Button>
      <Modal isOpen={isOpen} size='full' motionPreset='none'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize='md'>Add Salesforce Org</ModalHeader>
          <form onSubmit={handleSubmit}>
            <ModalBody>
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
            <ModalFooter>
              <ButtonGroup size='sm' spacing='4'>
                <Button leftIcon={<TiChevronLeftOutline />} variant='outline' onClick={onClose}>Back</Button>
                <Button type='submit'>Add</Button>
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddOrg
