import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, NextScript, Main } from 'next/document'
import { theme } from '../styles/theme'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/icon" />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="description" content="Controle de alertas de chuvas e outros alertas da Prefeitura de Mossoró" />
        </Head>

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}