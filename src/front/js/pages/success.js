import "../../styles/pages/success.css";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export const Success = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <div className="success">
        <div className="confettie-wrap" ref={windowDimension}>
          <h1> Nicely done!</h1>
          <h4>
            You're ready to start using
            <Link to="/login">
              <div className="btn btn-clear btn-block"> Get Fit App! </div>
            </Link>
          </h4>
          <Confetti
            numberOfPieces={200}
            width={windowDimension.width}
            height={windowDimension.height}
          />
        </div>
      </div>
    </>
  );
};
