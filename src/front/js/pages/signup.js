import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/pages/signup.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_name, setFirstName] = useState("");
  const [user_lastname, setLastName] = useState("");
  const [direction, setDirection] = useState("");
  const [gender, setGender] = useState("");
  const [user_id, setUser_id] = useState("");
  const [auth, setAuth] = useState(false);
  const [rol, setRol] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await actions.signup({
      rol: rol,
      email: email,
      id_number: user_id,
      firstname: user_name,
      lastname: user_lastname,
      password: password,
      address: direction,
      gender: gender,
    });
    if (response) {
      navigate("/success");
    } else {
      alert("invalid credentials");
    }
  };

  useEffect(() => {
    if (store.token && store.token != null) navigate("/");
  }, [store.token]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 register mt-5">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="d-flex flex-wrap">
              <div className="form-group-center col-md-8 p-3">
                <label htmlFor="exampleInputRol">Tipo de Usuario</label>
                <select
                  value={rol}
                  onChange={(event) => setRol(event.target.value)}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="">Seleccione tipo de Usuario</option>
                  <option value="user">Usuario</option>
                  <option value="trainer">Personal Tariner</option>
                </select>
              </div>

              <div className="form-group col-md-6 p-3">
                {/* Form Data */}

                <label htmlFor="exampleInputFirstName">First name</label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                  placeholder="First name"
                />
              </div>

              <div className="form-group col-md-6 p-3">
                <label htmlFor="exampleInputLastName">Last name</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                  placeholder="Last name"
                />
              </div>

              <div className="form-group col-md-6 p-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group col-md-6 p-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                />
              </div>

              <div className="form-group col-md-12 p-3">
                <label htmlFor="exampleInputID">ID</label>
                <input
                  onChange={(e) => setUser_id(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputID"
                  placeholder="ID number"
                />
              </div>

              <div className="form-group col-md-12 p-3">
                <label htmlFor="exampleInputDirection">Address</label>
                <input
                  onChange={(e) => setDirection(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputDirection"
                  placeholder="Enter address"
                  value={direction}
                />
              </div>

              <div className="form-group col-md-12 p-3">
                <label htmlFor="exampleInputGender">Gender</label>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputDirection"
                  placeholder="Enter Gender"
                  value={gender}
                />
              </div>

              {/* Signup Button */}
              <button type="submit" className="btn btn-primary m-3">
                Sign up
              </button>

              <div className="col-md-12 d-flex justify-content-between m-3">
                <p className="forgot-password text-left">
                  Already registered <a href="login">log in?</a>
                </p>
              </div>
            </div>
          </form>
          {auth ? <Redirect to="/success" /> : null}
        </div>
      </div>
    </div>
  );
};
