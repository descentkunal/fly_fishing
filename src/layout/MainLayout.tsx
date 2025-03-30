import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LayoutWrapper from '../components/LayoutWrapper';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ }: any) => {
  return (
    <>
      <Box sx={{ backgroundColor: '#fff' }}>
        <LayoutWrapper>
          <Header />
        </LayoutWrapper>
      </Box>

      <Box component="main" sx={{ py: 4 }}>
        <LayoutWrapper>
          <Outlet />
        </LayoutWrapper>
      </Box>

      <Box sx={{ backgroundColor: '#1e1e1e' }}>
        <LayoutWrapper>
          <Footer />
        </LayoutWrapper>
      </Box>
    </>
  );
};

export default MainLayout;
