import React from "react";
import { Box } from "@mui/material";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70vw" },
        mx: "auto",
        px: { xs: 0, md: 0 },
      }}
    >
      {children}
    </Box>
  );
};

export default LayoutWrapper;
