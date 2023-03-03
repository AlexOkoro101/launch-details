import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RocketIcon } from '../icons';

const LaunchCard = ({ name, details, id }: Record<string, any>) => {
  const navigate = useNavigate();
  
  return (
    <Box
      p="15px"
      width="100%"
      cursor="pointer"
      _hover={{
        backgroundColor:"#e9e9e9"
      }}
      border="1px solid #ddd"
      onClick={() => navigate(`/launches/${id}`)}
    >   
        <HStack
          spacing={2}
          alignItems="flex-start"
        >
          <Box
            width="40px"
            height="40px"
            borderRadius="50%"
            bg="primary.100"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexShrink={0}
          >
            <RocketIcon
              size="20px"
            />
          </Box>
          <Stack spacing={1}>
            <Text>{ name }</Text>
            <Text
              color="text.gray.100"
              noOfLines={1}
            >
              { details ?? 'N/A'}
            </Text>
          </Stack>
        </HStack>
    </Box>
  );
};

export default LaunchCard;