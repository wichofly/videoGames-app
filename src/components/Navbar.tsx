import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'

import ColorModeButton from "./ColorModeButton"

const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeButton />
    </HStack>
  )
}

export default Navbar

/**
 * VStack: used to stack elements in the vertical direction
 * HStack: used to stack elements in the horizontal direction
 * Stack: used to stack elements in the vertical or horizontal direction
 */