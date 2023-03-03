import { Box } from '@chakra-ui/react';
import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners';
import { LoaderProps } from '../types';

const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <Box
      position="absolute"
      inset={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={20}
      bg="#f2efef"
      height="calc(100vh - 115px)"
    >
      <ClipLoader
        color="#ddd"
        loading={loading} 
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  )
}

export default Loader;