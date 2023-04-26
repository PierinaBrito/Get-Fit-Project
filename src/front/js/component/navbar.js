import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/pages/home.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
//import "../../styles/pages/home.css";
//import ".//../../img/home/AdobeStock5.jpeg";

export const Navbar = ({ props, imageSrc }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const logout = (e) => {
    actions.logout();
    navigate("/login");
  };

  return (
    <>
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
          <div className="col-md-2">
            <Link to="/">
              <h4 className="text-secondary">Home</h4>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/training">
              <h4 className="text-secondary">Training</h4>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/perfil">
              <h4 className="text-secondary">Perfil</h4>
            </Link>
          </div>
          <div className="col-md-2">
            <Link to="/about">
              <h4 className="text-secondary">About Us</h4>
            </Link>
          </div>
          <div className="col-md-3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                tag="span"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
              >
                <h4 className="text-secondary">
                  Profile <i className="fas fa-angle-down" />
                </h4>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Actions</DropdownItem>
                {store.token ? (
                  <div>
                    <Link to="/resetpassword">
                      <DropdownItem>Change Password</DropdownItem>
                    </Link>

                    <DropdownItem onClick={logout}>Log out</DropdownItem>
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
    </>
  );
};
