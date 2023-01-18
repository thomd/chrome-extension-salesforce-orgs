import React, { useState } from 'react'
import { HStack, Text, Box, Flex, Divider } from '@chakra-ui/react'
import { TiHomeOutline, TiCogOutline, TiDocumentText, TiShoppingCart, TiImageOutline } from 'react-icons/ti'
import { OrgAction } from '.'
import { open, getSetupUrl, getDeveloperConsoleUrl, getStoreUrl, getExperienceBuilderUrl } from '../utils/url.js'

function OrgsListItem({ org, deleteOrg, editOrg }) {

  function openHome(org) {
    open(org.url)
  }

  function openSetup(org) {
    open(getSetupUrl(org.url))
  }

  function openExperienceBuilder(org) {
    open(getExperienceBuilderUrl(org.url))
  }

  function openDeveloperConsole(org) {
    open(getDeveloperConsoleUrl(org.url))
  }

  function openStore(org) {
    open(getStoreUrl(org.url))
  }

  return (
    <>
      <HStack w='100%' py={2}>
        <Flex w='100%' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box h={4} w={4} mr={3} bg={org.color} borderRadius={4} />
            <Text fontSize='md' fontWeight='bold' color='gray.600' w='240px' noOfLines={1}>{org.name}</Text>
          </Flex>
          <Flex color='gray.400' w='140px' justifyContent='space-between' alignItems='center'>
            <OrgAction icon={TiHomeOutline} color='black' org={org} action={openHome} />
            <OrgAction icon={TiImageOutline} color='black' org={org} action={openExperienceBuilder} />
            <OrgAction icon={TiShoppingCart} color='black' org={org} action={openStore} />
            <OrgAction icon={TiCogOutline} color='black' org={org} action={openSetup} />
            <OrgAction icon={TiDocumentText} color='black' org={org} action={openDeveloperConsole} />
          </Flex>
        </Flex>
      </HStack>
      <Divider orientation='horizontal' _last={{ display: 'none' }} />
    </>
  )
}

export default OrgsListItem
