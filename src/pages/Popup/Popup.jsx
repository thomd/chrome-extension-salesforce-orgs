import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
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
