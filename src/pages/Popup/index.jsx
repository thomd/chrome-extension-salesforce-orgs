import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';

createRoot(window.document.querySelector('#app')).render(
  <ChakraProvider>
    <Popup />
  </ChakraProvider>
);
