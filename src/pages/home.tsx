import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import SearchComponent from '../components/searchComponent';
import { RocketIcon } from '../icons';

const Home = () => {
  return (
    <Box
      height="calc(100vh - 4rem)"
      py="24px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <VStack
          alignItems="center"
          spacing="0"
          mb="10px"
        >
          <Text 
            as="span"
            color="white"
            fontSize="xl"
          >
            It's simple and smart
          </Text>
          <Text
            as="h1"
            color="white"
            fontSize="7xl"
            fontWeight="bold"
            marginTop="0"
          >
            Search, Find & View
          </Text>
        </VStack>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          mb="60px"
        >
          <Box
            border="1px solid #fff"
            borderRadius="50%"
            h="50px"
            w="50px"
            overflow="hidden"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <RocketIcon />
          </Box>
          <Text
            color="white"
            fontSize="2xl"
          >
            Over 200,000 Lauches
          </Text>
        </Box>

        <SearchComponent />
      </Box>
    </Box>
  );
};

export default Home;