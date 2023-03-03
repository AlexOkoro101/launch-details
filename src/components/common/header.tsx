import { Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react'
import { HeaderProps } from '../../types';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Box
      height="50px"
      boxShadow="0px 5px 5px 0px rgba(0,0,0,0.1)"
      bg="white"
      display="flex"
      alignItems="center"
      px="16"
    >
      <Heading
        as="h1"
        color="text.gray.200"
        lineHeight={1}
        fontSize="16px"
        fontWeight="400"
      >
        { title }
      </Heading>
    </Box>
  )
}

export default Header;