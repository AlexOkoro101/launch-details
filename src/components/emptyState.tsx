import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const EmptyState = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 120px)"
    >
      <Box textAlign="center">
        <Heading>Not found</Heading>
        <Text>Nothing matches your search criteria.</Text>

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

export default EmptyState;