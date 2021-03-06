import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "./Link";

export function Header() {
  return (
    <Flex
      as="header"
      className="w_header"
      h="4.5rem"
      borderBottom="1px solid #e8eaed"
      align="center"
    >
      <Container maxW="100%">
        <Link href="/">
          <Heading as="span" fontSize="lg" fontWeight="bold" letterSpacing="0.7">mossorĂ³</Heading>
          <Text as="span" fontSize="lg" fontWeight="normal">alerta</Text>
        </Link>
      </Container>
    </Flex>
  )
}