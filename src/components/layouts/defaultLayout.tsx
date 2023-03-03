import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navbar';

const DefaultLayout = () => {
  //get active route
  const { pathname } = useLocation();

  //function for returning navbar variation
  const getVariation = () => {
    if(pathname === '/') {
      return 'transparent'
    }
    return 'solid';
  }
  
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1908&q=80')`,
        pos: "relative"
      }}
    >
      <Box
        backgroundColor="rgba(0,0,0,.7)"
        pos="relative"
        width="100%"
        height="100%"
      >
        <Navbar
          variation={getVariation()}
        />
        <Box pt="16">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultLayout;