import { Button, HStack, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ColorModeButton = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Button variant="ghost" onClick={toggleColorMode}>
        {colorMode === 'dark' ? (
          <FiSun color="#F57D1F" fontSize="2.0em" />
        ) : (
          <FiMoon color="#81689D" fontSize="2.0em" />
        )}
      </Button>
    </HStack>
  );
};

export default ColorModeButton;

/**
 * Using <Button /> is not necessary to use "isChecked"
 * https://chakra-ui.com/docs/styled-system/color-mode#usecolormode
 */
