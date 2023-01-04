import React from 'react'
import { useState } from 'react'
import { VStack, Text } from '@chakra-ui/react'
import { TiCog } from 'react-icons/ti'  // https://react-icons.github.io/react-icons
import OrgList from '../../components/OrgList'
import AddOrg from '../../components/AddOrg'

const Popup = () => {
  const orgsList = []

  const [orgs, setOrgs] = useState(orgsList)

  function deleteOrg(id) {
    const newOrgs = orgs.filter((item) => item.id !== id )
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
      <Text
        bgGradient = 'linear(to-l, #7928CA, #FF0080)'
        bgClip = 'text'
        fontSize = '2xl'
        fontWeight = 'extrabold'>Salesforce Org Manager</Text>
      <OrgList orgs={orgs} deleteOrg={deleteOrg} editOrg={editOrg} />
      <AddOrg addOrg={addOrg}/>
    </VStack>
  )
}

export default Popup
