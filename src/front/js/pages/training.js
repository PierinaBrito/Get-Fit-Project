import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/component/training.css";

import fit_t from "../../img/assets/home/AdobeStock6.jpeg";
import fit_o from "../../img/assets/home/AdobeStock7.jpeg";
import Train from "../component/train.js";

export const Training = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <Train
        imageSrc={fit_o}
        title={"Online WorkOut"}
        subtitle={
          "Online workouts are exercises that you can do at home or wherever you have access to the internet. These workouts typically involve a combination of cardio, strength training, and flexibility exercises, and can be done using a variety of equipment or no equipment at all. Some popular types of online workouts include: High-intensity interval training (HIIT), Yoga, Bodyweight exercises, Dance fitness, Pilates and more. When choosing an online workout, it's important to consider your fitness level and goals. Make sure to choose a workout that is challenging but also achievable, and be sure to warm up before you begin to prevent injury.   !"
        }
      />
      <Train
        imageSrc={fit_t}
        title={"Personal Trainer"}
        subtitle={
          "The fitness professional works with clients one-on-one or in small groups. They typically start by assessing the client's fitness level and discussing their goals, then create a personalized plan that may include cardiovascular exercise, strength training, and flexibility exercises. They also provide guidance on proper form and technique to prevent injury and maximize results.."
        }
        flipped={true}
      />
    </div>
  );
};
