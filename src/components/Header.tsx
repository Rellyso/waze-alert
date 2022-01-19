import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      className="w_header"
      h="4.5rem"
      borderBottom="1px solid #e8eaed"
      align="center"
    >
      <Container maxW="container.xl">
        <Heading as="span" fontSize="lg" fontWeight="bold" letterSpacing="0.7">mossoró</Heading>
        <Text as="span" fontSize="lg" fontWeight="normal">alerta</Text>

      </Container>
    </Flex>
  )
}