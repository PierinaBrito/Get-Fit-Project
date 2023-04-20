import "../../styles/pages/success.css";
import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";

//const [auth, setAuth] = useState(false);

export default function Success() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const confetiRef = useRef("");

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <div className="App">
      <div className="confettie-wrap" ref={confetiRef}>
        <h1> Nicely done!</h1>
        <h3>
          You're ready to start using <b> Get Fit App! </b>
        </h3>
        <Confetti numberOfPieces={200} width={width} height={height} />
      </div>
    </div>
  );
}
