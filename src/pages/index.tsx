import { Button, Container, Flex, Heading, Icon, List, Text, UnorderedList } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { NavDrawerItem } from "../components/NavigationDrawer/NavDrawerItem";
import { BsHouseDoorFill } from 'react-icons/bs'


export default function Home() {
  return (
    <>
      <Header />

      <Flex
        w="100%"
        h="calc(100vh - 4.5rem)"
      >
        <Flex
          as="nav"
          w="264px"
          borderRight="1px solid #e8eaed"
          pt="6"
          direction="column"
        >
          <NavDrawerItem href="#" isActive icon={BsHouseDoorFill}>Início</NavDrawerItem>
          <NavDrawerItem href="#" icon={BsHouseDoorFill}>Novo alerta</NavDrawerItem>
        </Flex>

        <Flex
          w="100%"
        >
          <Text>Waze</Text>
        </Flex>
      </Flex>
    </>
  )
}
