import React, { FC } from 'react';
import { HStack, Link, Text } from '@chakra-ui/react';
import { NavbarProps } from '../types';

const Navbar: FC<NavbarProps> = ({ variation }) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      h="16"
      backgroundColor={variation === 'transparent' ? 'transparent' : 'primary.100'}
      px="16"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex={50}
    >
      <Link
        href='/'
        fontSize="3xl"
        color="white"
        textTransform="uppercase"
        _hover={{
          textDecoration: "none"
        }}
      >
        Launch Data
      </Link>
      <Text
        color="white"
        fontSize="md"
      >
        About
      </Text>
    </HStack>
  );
};

export default Navbar;