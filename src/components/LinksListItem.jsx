import React, { Fragment } from 'react'
import { HStack, Link, Flex } from '@chakra-ui/react'
import { open } from '../utils/url.js'

function LinksListItem({ link }) {
  return (
    <Fragment>
      <HStack w='100%' py={1}>
        <Flex w='100%' justifyContent='space-between'>
          <Flex alignItems='center' mr={4}>
            <Link
              fontSize='md'
              color='gray.600'
              w='210px'
              _hover={{ textDecoration: 'none', color: 'sf.mc' }}
              noOfLines={1}
              onClick={() => {
                open(link.href)
              }}>
              {link.name}
            </Link>
          </Flex>
        </Flex>
      </HStack>
    </Fragment>
  )
}

export default LinksListItem
