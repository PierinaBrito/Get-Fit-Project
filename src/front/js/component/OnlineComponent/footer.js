import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import logo from "../../../img/assets/home/fit3.jpg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" p="40px" pt="24px">
        <img src={logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Pierina Brito.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
