import { extendTheme } from "@chakra-ui/react";

// Configurações iniciais do tema
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

// Cores personalizadas e da marca
const colors = {
  brand: {

  },
}

// Definição de fontes utilizadas pelo sistema
const fonts = {
  body: 'Rubik, Roboto, system-ui, sans-serif',
  heading: 'Roboto, system-ui, sans-serif',
  mono: 'Rubik, Roboto, monospace',
  title: 'Rubik, Roboto, system-ui, sans-serif',
}

export const theme = extendTheme({
  config,
  colors,
  fonts,
  global: {
    body: {
      width: 'calc(100vw - (100vw - 100%))',
    },
  },
})