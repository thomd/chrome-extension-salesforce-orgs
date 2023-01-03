import React from 'react';
import './Popup.css';
import { ChakraProvider } from '@chakra-ui/react'

const Popup = () => {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <p>test</p>
      </header>
    </div>
    </ChakraProvider>
  );
};

export default Popup;
