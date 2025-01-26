import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // light gray for light mode, darker gray for dark mode
  const color = useColorModeValue('teal', 'gray.300');

  return (
    <Flex direction="column" bg={bgColor} color={color} minHeight="100vh">
      <Navbar />
      <Box flex="1" padding="5">
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;

/**
 * The Outlet component from react-router-dom is used as a placeholder for rendering child routes. (on routes.tsx) 
   It allows us to define a layout that can be shared across multiple routes, and the specific content for each route will be rendered inside the Outlet.
 */
