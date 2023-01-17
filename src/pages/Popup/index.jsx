import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Popup from './Popup'

const theme = extendTheme({
  colors: {
    sf: {
      headbg: '#eaf5fe',   // header background color
      headtc: '#0b5cab',   // header text color
      mc: '#0b5cab',       // main color
      btnpbg: '#0b5cab',   // button primary background
      btnpbc: '#608ec4',   // button primary border color
      btnptc: '#ffffff',   // button primary text color
      btnsbg: '#ffffff',   // button secondary background
      btnsbc: '#0077c4',   // button secondary border color
      btnstc: '#0077c4',   // button secondary text color
    },
  },
})

createRoot(window.document.querySelector('#app')).render(
  <ChakraProvider theme={theme}>
    <Popup />
  </ChakraProvider>
)
