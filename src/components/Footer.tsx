import { Box, Button, HStack, Link, Text } from '@chakra-ui/react';
import { FaGithub, FaLaptop, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerYears = new Date().getFullYear();

  return (
    <HStack p="20px" justifyContent="space-between" fontSize="xl">
      <Text as="b"> Copyrights &copy; {footerYears} All Rights Reserved</Text>
      <Box textAlign="center">
        <Text as="b">Find me on</Text>
        <HStack justifyContent="space-between" my={2}>
          <Button variant="ghost">
            <Link
              href="https://www.linkedin.com/in/mauricio-erazo-/"
              isExternal
            >
              <FaLinkedin fontSize="1.8em" />
            </Link>
          </Button>

          <Button variant="ghost">
            <Link href="https://github.com/wichofly/videoGames-app" isExternal>
              <FaGithub fontSize="1.8em" />
            </Link>
          </Button>

          <Button variant="ghost">
            <Link
              href="https://wichofly.github.io/portfolio-website/"
              isExternal
            >
              <FaLaptop fontSize="1.8em" />
            </Link>
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default Footer;
