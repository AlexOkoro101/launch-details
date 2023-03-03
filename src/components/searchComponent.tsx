import { Box, Button, Divider, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import DefaultInput from './common/defaultInput';

const SearchComponent = () => {
  //state for search data
  const [searchData, setSearchData] = useState({
    startDate: '',
    endDate: '',
  });

  //function to handle input change
  const handleChange = () => {

  };


  return (
    <HStack
      divider={<Divider orientation='vertical' />}
      bg="white"
      borderRadius="12px"
      width="1000px"
      h="70px"
      pl="20px"
      pr="10px"
      py="15px"
      display="flex"
      alignItems="center"
      gap="20px"
    >
      <DefaultInput 
        name="startDate"
        type="date"
        value={searchData.startDate}
        onChange={handleChange}
        placeholder="Start date"
        // sx={{
        //   flex: 1
        // }}
      />

      <DefaultInput 
        name="endDate"
        type="date"
        value={searchData.endDate}
        onChange={handleChange}
        placeholder="End date"
      />

      <Button 
        colorScheme='teal'
        bg="primary.100"
        size='lg'
        width="20%"
      >
        Search
      </Button>

    </HStack>
  );
};

export default SearchComponent;