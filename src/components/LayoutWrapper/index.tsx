// src/components/LayoutWrapper/index.tsx
import React from 'react';
import { Box } from '@mui/material';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '60vw' },
        mx: 'auto',
        px: { xs: 2, md: 0 },
      }}
    >
      {children}
    </Box>
  );
};

export default LayoutWrapper;
