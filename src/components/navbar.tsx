import React, { FC } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { NavbarProps } from '../types';

const Navbar: FC<NavbarProps> = ({ variation }) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      h="16"
      backgroundColor={variation === 'transparent' ? 'color.primary' : 'transparent'}
      px="16"
      position="fixed"
      top="0"
      left="0"
      width="100%"
    >
      <Text
        fontSize="3xl"
        color="white"
        textTransform="uppercase"
      >
        Lauch Data
      </Text>
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