import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo-videoGames.webp';

import ColorModeButton from './ColorModeButton';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" borderRadius="lg" objectFit="cover" />
      </Link>
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
