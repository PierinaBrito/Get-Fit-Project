import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../component/OnlineComponent/Exercises";
import SearchExercises from "../component/OnlineComponent/SearchExercises";
import HeroBanner from "../component/OnlineComponent/HeroBanner";

const OnlineHome = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      {/* <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      /> */}
    </Box>
  );
};

export default OnlineHome;
