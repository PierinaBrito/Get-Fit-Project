import React, { useState, useContext } from "react";
import "../../styles/pages/signup.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";

export const LogIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const token = sessionStorage.getItem("token");
  console.log("This is your token, token");

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(
      "https://3001-parrajuanpa-proyectofin-wjjmnfke05w.ws-us93.gitpod.io/api/token",
      opts
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There has been some error!");
      })
      .then((data) => {
        console.log("This came from the backend", data);
        sessionStorage.setItem("token", data.access_token);
      })
      .catch((error) => {
        console.error("There was an error!!!", error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 register">
          <form onClick={handleClick}>
            <h3>Log In</h3>
            {token && token != "" && token != undefined ? (
              "You are logged in with this token" + token
            ) : (
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Log In
            </button>

            <div className="d-flex justify-content-between">
              <p className="cancel text-left">
                <a href="/">Cancel</a>
              </p>

              <p className="forgot-password text-right">
                Forgot <a href="forgotpassword">password?</a>
              </p>
            </div>
          </form>
          {auth ? <Redirect to="/" /> : null}
        </div>
      </div>
    </div>
  );
};
