import React, { useState } from 'react'
import { Box, Popover, PopoverTrigger, PopoverContent, PopoverArrow, SimpleGrid, useBoolean } from '@chakra-ui/react'
import { orgColors } from '../utils/color'
import { updateFavicon } from '../utils/favicon'
import { isSalesforceUrl } from '../utils/url'

function OrgColorAction({ org, orgs, setOrgs, editOrg }) {
  const [isOpen, setIsOpen] = useBoolean()
  const [orgValue, setOrgValue] = useState(org)

  const handleColorClick = (color, borderColor) => {
    setIsOpen.toggle()
    let updatedOrg = { ...orgValue, color: color, borderColor: borderColor }
    setOrgValue(updatedOrg)
    editOrg(orgs, setOrgs, orgValue.id, updatedOrg)
    chrome.tabs.query({ lastFocusedWindow: true }, function (tabs) {
      tabs
        .filter(tab => isSalesforceUrl(tab.url))
        .forEach(tab => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: updateFavicon,
          })
        })
    })
  }

  return (
    <Popover isOpen={isOpen} placement='right'>
      <PopoverTrigger>
        <Box
          h={4}
          w={4}
          bg={orgValue.color}
          borderWidth={2}
          borderStyle={'solid'}
          borderColor={orgValue.borderColor}
          borderRadius={4}
          _hover={{ cursor: 'pointer' }}
          onClick={setIsOpen.toggle}
        />
      </PopoverTrigger>
      <PopoverContent w='auto' boxShadow='md'>
        <PopoverArrow />
        <SimpleGrid columns={5} p={1} spacing={1}>
          {orgColors.map((color, index) => (
            <Box
              key={`col-${index}`}
              h={4}
              w={4}
              bg={color.bg}
              borderWidth={2}
              borderStyle={'solid'}
              borderColor={color.border}
              _hover={{ cursor: 'pointer' }}
              onClick={() => handleColorClick(color.bg, color.border)}
            />
          ))}
        </SimpleGrid>
      </PopoverContent>
    </Popover>
  )
}

export default OrgColorAction
