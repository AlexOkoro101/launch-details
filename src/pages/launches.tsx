import React, { useEffect, useState } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import Header from '../components/common/header';
import LaunchCard from '../components/launchCard';
import useFetch from '../hooks/useFetch';
import Loader from '../components/loader';
import ReactPaginate from 'react-paginate';
import { UseFetchProps } from '../types';
import ErrorPage from './404';
import { useLocation } from 'react-router-dom';


const Launches = () => {
  const location = useLocation();

  //get query params from location
  const {startDate, endDate } = location.state;

  //query object to fetch
  const payload = {
    query: {
      date_utc: {
        $gte: new Date(startDate).toISOString(),
        $lte: new Date(endDate).toISOString()
      }
   }
  }

  const {callApi, data, error, isLoading}: UseFetchProps = useFetch({
    endpoint: `launches/query`,
    method: 'POST',
    body: JSON.stringify(payload)
  });

  //pagination data
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    itemsPerPage: 5
  })

  const indexOfLastPost = paginationData.currentPage * paginationData.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - paginationData.itemsPerPage;
  const currentItems = data?.docs.slice(indexOfFirstPost, indexOfLastPost);

  //page count
  const pageCount = Math.ceil(data?.docs.length / paginationData.itemsPerPage);

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

          {error && (
            <ErrorPage />
          )}

          {data?.docs.length >= 1 ? (
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
          ) : (
            <ErrorPage />
          )}
        </Box>
    </Box>
  );
};

export default Launches;