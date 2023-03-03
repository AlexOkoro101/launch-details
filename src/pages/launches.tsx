import React, { useEffect, useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import Header from '../components/common/header';
import LaunchCard from '../components/launchCard';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader';
import ReactPaginate from 'react-paginate';
import { UseFetchProps } from '../types';


const Launches = () => {
  const {callApi, isLoading, data, error}: UseFetchProps = useFetch('launches');

  //pagination data
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    itemsPerPage: 5
  })

  const indexOfLastPost = paginationData.currentPage * paginationData.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - paginationData.itemsPerPage;
  const currentItems = data?.slice(indexOfFirstPost, indexOfLastPost);

  //page count
  const pageCount = Math.ceil(data?.length / paginationData.itemsPerPage);

  //fetch all lauches
  useEffect(() => {
    callApi()
  }, [])

  //functions
  const handlePageClick = ({ selected }: any) => {
    setPaginationData(prev => ({
      ...prev,
      currentPage: selected + 1
    }))
  }
  
  return (
    <Box
      background="#f2efef"
    >
      <Header 
        title="All Launches"
      />
        <Box
          className="container"
          px="300px"
          py="15px"
          pos="relative"
        >
          {isLoading && (
            <Loader 
              loading={isLoading}
            />
          )}

          {data && (
            <VStack spacing={10}>
              <VStack
                spacing={5}
                background="white"
                borderRadius="12px"
                px="20px"
                py="10px"
                pos="relative"
              >
                {(currentItems as Array<{}>).map((launch, index) => (
                  <LaunchCard
                    key={index}
                    {...launch}
                  />
                ))}
              </VStack>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                containerClassName="pagination"
                pageLinkClassName="page-number"
                previousLinkClassName="page-number"
                activeLinkClassName="active-link"
                renderOnZeroPageCount={undefined}
              />
            </VStack>
          )}
        </Box>
    </Box>
  );
};

export default Launches;