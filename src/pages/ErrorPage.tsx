import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();

  const bgColor = useColorModeValue('gray.100', 'gray.800'); // light gray for light mode, darker gray for dark mode
  const color = useColorModeValue('teal', 'gray.300');

  return (
    <Box bg={bgColor} color={color} minHeight="100vh">
      <Navbar />
      <Box padding="5">
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error occurred'}
        </Text>
        <Link to="/">
          <Button mt="4">Back to Home Page</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ErrorPage;
