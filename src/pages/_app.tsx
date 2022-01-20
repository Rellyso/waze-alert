import { ChakraProvider, Collapse, Flex } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { NavigationDrawer } from '../components/NavigationDrawer'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Header />

      <Flex
        w="100%"
        h="calc(100vh - 4.5rem)"
      >
        <NavigationDrawer />

        <Flex
          w="100%"
          className="content"
        >
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
