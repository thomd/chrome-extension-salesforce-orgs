import { HStack, VStack, Text, Flex, Badge } from '@chakra-ui/react'
import { IconContext } from 'react-icons'
import { TiHomeOutline, TiCogOutline, TiDocumentText, TiShoppingCart, TiEdit, TiDelete } from 'react-icons/ti'
import React, { useState } from 'react'

function OrgList({ orgs, deleteOrg, editOrg }) {

  const [org, setOrg] = useState('')
  const [modalValue, setModalValue] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  function handleEditClick(org) {
    setIsOpen(true)
    setModalValue(org)
  }

  function handleEditInputChange(e, id) {
    setModalValue({ ...modalValue, text: e.target.value })
  }

  function handleEditSubmit(e) {
    e.preventDefault()
    editTodo(modalValue.id, modalValue)
    setModalValue('')
    setIsOpen(false)
  }

  return !orgs.length ? (
    <Badge variant='outline' borderRadius='2' p='2' m='2'>No Orgs</Badge>
  ) : (
    <VStack w='100%'>
      {orgs.map((org) => (
        <HStack key={org.id} w='100%'>
          <Flex py={1} w='100%' justifyContent='space-between'>
            <Text fontSize="md">{org.text}</Text>
            <Flex color='gray.500' w='24%' justifyContent='space-between'>
              <IconContext.Provider value={{ size: '2em' }}>
                <TiHomeOutline />
                <TiCogOutline />
                <TiDocumentText />
                <TiShoppingCart />
                <TiDelete onClick={() => deleteOrg(org.id)} />
                <TiEdit onClick={() => handleEditClick(org)} />
              </IconContext.Provider>
            </Flex>
          </Flex>
        </HStack>
      ))}
    </VStack>
  );
}

export default OrgList;
