import { Flex } from "@chakra-ui/react";
import { NavDrawerItem } from "./NavDrawerItem";
import { BsHouseDoorFill } from 'react-icons/bs'
import { MdOutlineAddCircle } from 'react-icons/md'

export function NavigationDrawer() {
  return (
    <Flex
      as="nav"
      className="nav-drawer"
      w="264px"
      borderRight="1px solid #e8eaed"
      pt="6"
      direction="column"
    >
      <NavDrawerItem href="/" icon={BsHouseDoorFill}>Início</NavDrawerItem>
      <NavDrawerItem href="/novo-alerta" icon={MdOutlineAddCircle}>Novo alerta</NavDrawerItem>
    </Flex>
  )
}