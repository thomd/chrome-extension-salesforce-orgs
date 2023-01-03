import * as React from 'react'
import { ChakraProvider, Container, Flex, VStack, IconButton, SearchIcon } from '@chakra-ui/react'

// https://react-icons.github.io/react-icons
import { TiCog } from 'react-icons/ti';

const Popup = () => {
  return (
    <ChakraProvider>
    <Container maxW="container.sm" p={0}>
    <Flex h="100vh" p={20}>
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
    <p>test</p>
    </VStack>
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
    <IconButton aria-label='Search database' icon={<TiCog />} />
    </VStack>
    </Flex>
    </Container>
    </ChakraProvider>
  );
};

export default Popup;
