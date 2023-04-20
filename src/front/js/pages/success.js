import "../../styles/pages/success.css";
import Confetti from "react-confetti";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
    <div className="success">
      <div className="confettie-wrap" ref={confetiRef}>
        <h1> Nicely done!</h1>
        <h4>
          You're ready to start using
          <button
            type="submit"
            className="btn btn-clear btn-block"
            href="login"
          >
            Get Fit App!
          </button>
        </h4>
        <Confetti numberOfPieces={200} width={width} height={height} />
      </div>
    </div>
  );
}
