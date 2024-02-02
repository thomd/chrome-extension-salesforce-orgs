import React, { useState, Fragment } from 'react'
import { Modal, ModalOverlay, ModalContent, ModalBody, Input, Box, InputGroup, InputLeftAddon, FormControl, FormLabel, Switch, Flex } from '@chakra-ui/react'
import { Btn, Bttn, IconAction, Head, HeadLine } from '.'
import { BiPlus, BiX } from 'react-icons/bi'
import { nanoid } from 'nanoid'
import { extractHost, extractName, currentUrl } from '../utils/url.js'
import { defaultOrgColor } from '../utils/color.js'

function AddOrg({ addOrg }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalValue, setModalValue] = useState({})

  const handleSubmit = ev => {
    ev.preventDefault()
    modalValue.url = extractHost(modalValue.url)
    addOrg(modalValue)
    setIsOpen(false)
  }

  async function handleAddClick() {
    const url = await currentUrl()
    const name = url === '' ? '' : extractName(url)
    setModalValue({
      id: `sf-${nanoid()}`,
      name: name,
      url: url,
      color: defaultOrgColor,
      site: true,
    })
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
    setModalValue({})
  }

  function handleUrlChange(ev) {
    let url = extractHost(ev.target.value)
    setModalValue({ ...modalValue, url })
  }

  function handleUrlBlur(ev) {
    let url = ev.target.value
    let name = extractName(url)
    setModalValue({ ...modalValue, name })
  }

  function handleNameChange(ev) {
    let name = ev.target.value
    setModalValue({ ...modalValue, name })
  }

  function handleSiteChange(ev) {
    let site = ev.target.checked
    setModalValue({ ...modalValue, site })
  }

  return (
    <Fragment>
      <Btn icon={<BiPlus />} text='Add Org' action={handleAddClick} />
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
                    onBlur={handleUrlBlur}
                  />
                </InputGroup>
                <Input
                  value={modalValue.name}
                  key={modalValue.id}
                  variant='outline'
                  type='text'
                  placeholder='Org Name'
                  _placeholder={{ opacity: 0.6 }}
                  focusBorderColor='gray.400'
                  onChange={handleNameChange}
                />
                <FormControl display='flex' mt={2} alignItems='center' justifyContent='space-between'>
                  <Flex w='100%' alignItems='center'>
                    <FormLabel mt={2} ml={2}>
                      Experience Site?
                    </FormLabel>
                    <Switch isChecked={modalValue.site} onChange={handleSiteChange} />
                  </Flex>
                  <Bttn text='Add' type='submit' />
                </FormControl>
              </ModalBody>
            </Box>
          </form>
        </ModalContent>
      </Modal>
    </Fragment>
  )
}

export default AddOrg
