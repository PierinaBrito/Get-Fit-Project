import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pages/signup.css";

export const ForgotPassword = () => {
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
