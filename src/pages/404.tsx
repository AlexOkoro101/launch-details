import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Box>
        <h1>Oops! Page not found</h1>
        <p>Sorry the route you are looking for does not exist.</p>
       <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Box>
  );
};

export default ErrorPage;