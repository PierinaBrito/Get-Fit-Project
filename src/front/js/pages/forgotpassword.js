import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pages/signup.css";

export const ForgotPassword = () => {
  // const [email, setEmail] = useState("");
  //
  // const handleSubmit = e => {
  //
  // 	fetch(
  // 		("https://3001-parrajuanpa-proyectofin-hmsmcsanbil.ws-us93.gitpod.io/api/login",
  // 		{
  // 			method: "PUT",
  // 			body: JSON.stringify(body),
  // 			headers: {
  // 				"Content-Type": "application/json"
  // 			}
  // 		})
  // 			.then(res => res.json())
  // 			.then(data => {
  // 				console.log(data);
  // 				sessionStorage.setItem("my_token", data.token);
  // 			})
  // 			.catch(err => console.log(err))
  // 	);
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 register">
          <form>
            <h3>Forgot Password</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="d-flex justify-content-between">
              <p className="cancel text-left">
                <a href="/">Cancel</a>
              </p>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
