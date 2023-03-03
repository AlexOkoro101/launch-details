import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react'
import { DataProps } from '../types';

const DataDisplayBox: FC<DataProps> = ({ data, dataDetail, type }) => {
  //function to generate color
  const generateColor = () => {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    let floored = Math.floor(randomNumber);
    let string = floored.toString(16);
    let randomColor = string.padStart(6, "0");  

    return `#${randomColor.toUpperCase()}`;
  }

  const dataDetailStyle = {
    fontSize: "16px",
    fontWeight: "thin",
    color: "text.gray.100",
    lineHeight: 1.4,
    whiteSpace: "normal"
  };
  
  return (
    <HStack 
      spacing={2}
      alignItems="flex-start"
      border="1px solid #ccc"
      padding="20px 10px"
    >
      <Box
        backgroundColor={generateColor()}
        width="7px"
        height="7px"
        borderRadius="50%"
        flexShrink={0}
      ></Box>
      <VStack
        spacing={1}
        alignItems="flex-start"
      >
        <Text
          fontSize="12px"
          fontWeight="bold"
          color="text.gray.200"
          lineHeight={1}
        >
          { data }
        </Text>
        {type === "link" ? (
          <Link
            noOfLines={1}
            href={dataDetail ?? ''}
            sx={{
              ...dataDetailStyle
            }}
          >
            { dataDetail }
          </Link>
        ) : (
          <Text
            sx={{
              ...dataDetailStyle
            }}
          >
            { `${dataDetail}` }
          </Text>
        )}
      </VStack>
    </HStack>
  )
}

export default DataDisplayBox;