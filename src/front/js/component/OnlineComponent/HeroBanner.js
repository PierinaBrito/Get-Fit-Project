import React from "react";
import { Box, Typography, Button, St } from "@mui/material";
import "../../utils/App.css";

import HeroBannerImage from "../../../img/assets/home/AdobeStock7.jpeg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "150px", xs: "50px" },
        ml: { sm: "30px" },
      }}
      position="relative"
      p="20px"
    >
      <div className="d-flex">
        <div>
          <Typography color="#FF2625" fontWeight="600" fontSize="60px">
            Online Workout
          </Typography>
          <Typography
            fontWeight={700}
            sx={{ fontSize: { lg: "44px", xs: "40px" } }}
            mb="50px"
            mt="30px"
          >
            Sweat, Smile <br /> and Get Fit
          </Typography>
          <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the most effective Online Exercises
          </Typography>
          <Button
            variant="contained"
            color="info"
            href="#exercises"
            padding="15px"
          >
            {/* sx={{ backgroundColor: "#ff2625", padding: "10px" }} */}
            Explore Exercises
          </Button>

          <Typography
            fontWeight={600}
            color="#FF2625"
            sx={{
              opacity: 0.1,
              display: { lg: "block", xs: "none" },
              padding: "50px",
            }}
            fontSize="180px"
            mt="30px"
          >
            Get Fit
          </Typography>
        </div>
        <img
          src={HeroBannerImage}
          alt="AdobeStock7"
          className="hero-banner-img"
        />
      </div>
    </Box>
  );
};

export default HeroBanner;
