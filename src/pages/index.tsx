import { Button, Container, Flex, Heading, Icon, List, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <Flex
      w="100%"
    >
      <Head>
        <title>Mossoró Alerta</title>
      </Head>
      <Text>Waze</Text>
    </Flex>

  )
}
