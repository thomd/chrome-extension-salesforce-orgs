import React from 'react'
import { useState } from 'react'
import { VStack, Text, Flex, Button } from '@chakra-ui/react'
import { TiCog } from 'react-icons/ti'  // https://react-icons.github.io/react-icons
import { BiPlus } from "react-icons/bi";
import OrgList from '../../components/OrgList'
import AddOrg from '../../components/AddOrg'
import { useChromeStorageLocal } from 'use-chrome-storage'

const Popup = () => {
  const orgsList = []

  const [orgs, setOrgs, isPersistent, error] = useChromeStorageLocal('SalesforceOrgs', orgsList);

  function deleteOrg(org) {
    const newOrgs = orgs.filter((item) => item.id !== org.id )
    setOrgs(newOrgs)
  }

  function addOrg(newOrg) {
    setOrgs([...orgs, newOrg])
  }

  function editOrg(id, updatedOrg) {
    const updatedItem = orgs.map((org) => org.id === id ? updatedOrg : org )
    setOrgs(updatedItem)
  }

  return (
    <VStack p={5} w='500px'>
      <Flex w='100%' mb={4} justifyContent='space-between'>
        <Text
          bgGradient = 'linear(to-l, #7928CA, #FF0080)'
          bgClip = 'text'
          fontSize = '2xl'
          fontWeight = 'bold'>Salesforce Org Manager</Text>
        <Button leftIcon={<BiPlus />} size='sm'>Add Org</Button>
      </Flex>
      <OrgList orgs={orgs} deleteOrg={deleteOrg} editOrg={editOrg} />
      <AddOrg addOrg={addOrg}/>
      <Text>Persisted in chrome.storage.local: {isPersistent.toString()}</Text>
      <Text>Error: {error}</Text>
    </VStack>
  )
}

export default Popup
