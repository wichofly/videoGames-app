import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'

import ColorModeButton from "./ColorModeButton"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize='60px' />
      <SearchInput onSearch={onSearch} />
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