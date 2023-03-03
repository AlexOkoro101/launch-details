import { Button, Divider, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultInput from './common/defaultInput';

const SearchComponent = () => {
  const navigate = useNavigate();

  //state for search data
  const [searchData, setSearchData] = useState({
    startDate: '',
    endDate: '',
  });

  //function to handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  };

  //function to navigate to launch listing
  const handleSearch = () => {
    navigate('/launches', {
      state: {
        startDate: searchData.startDate,
        endDate: searchData.endDate
      }
    })
  }

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
        type="text"
        onChange={handleChange}
        placeholder="Start date"
      />

      <DefaultInput 
        name="endDate"
        type="text"
        onChange={handleChange}
        placeholder="End date"
      />

      <Button 
        colorScheme='teal'
        bg="primary.100"
        size='lg'
        width="20%"
        onClick={() => handleSearch()}
      >
        Search
      </Button>

    </HStack>
  );
};

export default SearchComponent;