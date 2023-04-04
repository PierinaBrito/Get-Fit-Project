import React from "react";
import "../../styles/Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="Hero">
      <img src={imageSrc} alt="fit" className="hero_image" />
      <h1 className="hero_title"> Get Fit </h1>
    </div>
  );
};

export default Hero;
