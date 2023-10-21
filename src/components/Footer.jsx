import React from "react";

import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 4,
        backgroundColor: "#333",
        color: "#fff",
        padding: "16px",
        textAlign: "center",

        bottom: 0,
        width: "100%",
      }}
    >
      Made with React by Ralph Goguanco
    </Box>
  );
};

export default Footer;
