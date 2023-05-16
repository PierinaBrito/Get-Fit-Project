import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/component/navbar.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//import "../../styles/pages/home.css";
//import ".//../../img/home/AdobeStock5.jpeg";

const Navbar = ({ props, imageSrc }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const logout = (e) => {
    actions.logout();
    navigate("/login");
  };

  // const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // FUNCTION TO TOGGLE NAVBAR
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // FUNCTION TO REMOVE NAVBAR
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBar Section">
      <header className="header flex">
        <div className="logoDiv">
          <Link className="logo flex" to="/">
            <h1>
              <CgGym className="icon" />
              Get Fit{" "}
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            {/* <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li> */}
            <li className="navItem">
              <Link className="navLink" to="/">
                Training
              </Link>
            </li>
            {/* <li className="navItem">
              <Link className="navLink" to="/login">
                Login
              </Link>
            </li> */}
            <li className="navItem">
              <Link className="navLink" to="/">
                Contact
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/about">
                About Us
              </Link>
            </li>

            {/* <Link to="/signup">
                <a href="#">JOIN NOW</a>
              </Link> */}
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
                    <Link to="/perfil">
                      <DropdownItem className="text-secondary">
                        Perfil
                      </DropdownItem>
                    </Link>
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
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-12">
//           <Link to="/">
//             <div className="text-center my-4 text-dark">
//               <img src={imageSrc} alt="" className="fit_05" />
//               <h1>GET FIT</h1>
//             </div>
//           </Link>
//         </div>
//       </div>
//       <div className="container text-center my-3">
//         <div className="row">
//           <div className="col-md-2">
//             <Link to="/">
//               <h4 className="text-secondary">Home</h4>
//             </Link>
//           </div>
//           <div className="col-md-2">
//             <Link to="/training">
//               <h4 className="text-secondary">Training</h4>
//             </Link>
//           </div>
//           {/* <div className="col-md-2">
//             <Link to="/perfil">
//               <h4 className="text-secondary">Perfil</h4>
//             </Link>
//           </div> */}
//           <div className="col-md-2">
//             <Link to="/about">
//               <h4 className="text-secondary">About Us</h4>
//             </Link>
//           </div>
//           <div className="col-md-3">
//             <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//               <DropdownToggle
//                 tag="span"
//                 data-toggle="dropdown"
//                 aria-expanded={dropdownOpen}
//               >
//                 <h4 className="text-secondary">
//                   Profile <i className="fas fa-angle-down" />
//                 </h4>
//               </DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem header>Actions</DropdownItem>
//                 {store.token ? (
//                   <div>
//                     <Link to="/perfil">
//                       <DropdownItem className="text-secondary">
//                         Perfil
//                       </DropdownItem>
//                     </Link>
//                     <Link to="/resetpassword">
//                       <DropdownItem>Change Password</DropdownItem>
//                     </Link>

//                     <DropdownItem onClick={logout}>Log out</DropdownItem>
//                   </div>
//                 ) : (
//                   <div>
//                     <Link to="/login">
//                       <DropdownItem>Log in</DropdownItem>
//                     </Link>
//                     <Link to="/signup">
//                       <DropdownItem>Sign up</DropdownItem>
//                     </Link>
//                   </div>
//                 )}
//               </DropdownMenu>
//             </Dropdown>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
