import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ErrorPage = () => {
  const error = useRouteError();

  const color = useColorModeValue('teal', 'gray.300');

  return (
    <>
      <Navbar />
      <Box color={color} padding="5">
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error occurred'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
