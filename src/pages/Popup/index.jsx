import React from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { themeColors } from '../../utils/color'
import Popup from './Popup'

const theme = extendTheme({
  colors: {
    sf: themeColors,
  },
})

createRoot(window.document.querySelector('#app')).render(
  <ChakraProvider theme={theme}>
    <Popup />
  </ChakraProvider>
)
