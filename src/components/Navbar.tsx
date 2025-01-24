import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo-videoGames.webp';

import ColorModeButton from './ColorModeButton';
import SearchInput from './SearchInput';

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="lg" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;

/**
 * VStack: used to stack elements in the vertical direction
 * HStack: used to stack elements in the horizontal direction
 * Stack: used to stack elements in the vertical or horizontal direction
 */
