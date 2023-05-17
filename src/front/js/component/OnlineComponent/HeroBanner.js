import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../../../img/assets/home/AdobeStock7.jpeg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Online Workout
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Get Fit
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective Online Exercises
      </Typography>
      <Button variant="contained" color="info" href="#exercises">
        {/* sx={{ backgroundColor: '#ff2625',
          padding: '10px' }} */}
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Get Fit
      </Typography>
      <img
        src={HeroBannerImage}
        alt="AdobeStock7"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
