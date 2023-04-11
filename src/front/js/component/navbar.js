import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/pages/home.css";
import ".//../../img/home/AdobeStock5.jpeg";

export const Navbar = ({ props, imageSrc }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const token = sessionStorage.getItem("my_token");
  const logout = (e) => {
    sessionStorage.removeItem("my_token");
    window.location.reload(false);
  };

  return (
    <div
      className="justify-content-between align-items-center border border-bottom text-light shadow-sm p-3 mb-5 bg-body rounded"
      id="navbar"
    >
      <div className="row">
        <div className="col-md-12">
          <Link to="/">
            <div className="text-center my-4 text-dark">
              <img src={imageSrc} alt="" className="fit_05" />
              <h1>GET FIT</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="container text-center my-3">
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <h4 className="text-dark">Home</h4>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/courses">
              <h4 className="text-dark">Training</h4>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/Information">
              <h4 className="text-dark">Contact</h4>
            </Link>
          </div>
          <div className="col-md-3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
              >
                <h4 className="text-dark">
                  Profile <i className="fas fa-angle-down" />
                </h4>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Actions</DropdownItem>
                {token ? (
                  <div>
                    <Link to="/resetpassword">
                      <DropdownItem>Change Password</DropdownItem>
                    </Link>
                    <Link to="/">
                      <DropdownItem onClick={logout}>Log out</DropdownItem>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <DropdownItem>Log in</DropdownItem>
                    </Link>
                    <Link to="/signup">
                      <DropdownItem>Sign up</DropdownItem>
                    </Link>
                  </div>
                )}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
