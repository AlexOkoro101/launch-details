import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text } from '@chakra-ui/react'

const ErrorPage = () => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 120px)"
    >
      <Box textAlign="center">
        <Heading>Oops! Page not found</Heading>
        <Text>Sorry the route you are looking for does not exist.</Text>

        <Button
          variant="outline"
          color="primary.100"
        >
          <Link to="/">
            Go back home
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;