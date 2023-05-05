import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../../styles/component/footer.css";
import video2 from "../../img/home/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4">
          {" "}
        </video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Get Fit with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder=" Enter your Email"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <CgGym className="icon" />
                  Get Fit{" "}
                </a>
              </div>

              <div data-aos="fade-up" className="footerParagraph">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon" />
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <AiFillFacebook className="icon" />
              </div>
            </div>

            <div className="footerLinks grid">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="linkGroup"
              >
                <span className="groupTitle">Useful Links</span>
                <li className="footerList flex">
                  <Link to="/signup">
                    <FiChevronRight className="icon" />
                    Join Now
                  </Link>
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Training
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Contact
                </li>
                <li className="footerList flex">
                  <Link to="/about">
                    <FiChevronRight className="icon" />
                    About us
                  </Link>
                </li>
              </div>
              <div className="footerDiv flex">
                <small>BEST FITNESS WEBSITE THEME</small>
                <small>COPYRIGHTS RESERVED - PIERINABRITO 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// // import "./components/footer.css";

// import {
//   FiFacebook,
//   FiGithub,
//   FiInstagram,
//   FiLinkedin,
//   FiTwitter,
// } from "react-icons/fi";

// import { FaEnvelope, FaGem, FaGoogle } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="text-center text-lg-start text-muted">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//         <div className="me-5 d-none d-lg-block">
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href="" className="me-4 text-reset">
//             <FiFacebook icon="facebook-f" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <FiTwitter icon="twitter" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <FaGoogle icon="google" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <FiInstagram icon="instagram" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <FiLinkedin icon="linkedin" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <FiGithub icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className="">
//         <div className="container-text-start text-md-center mt-5">
//           <div className="mt-3">
//             <div className="md-3 lg-4 xl-3">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <FaGem icon="gem" className="me-3" />
//                 GET FIT.com
//               </h6>
//               <p>
//                 Here you can use rows and columns to organize your footer
//                 content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="container-text-center text-md-center mt-5">
//           <div className="mt-3">
//             <div className="Col md-3 lg-2 xl-2">
//               <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//               <p>
//                 <a href="/signup" className="text-reset">
//                   Sign Up
//                 </a>
//               </p>
//               <p>
//                 <a href="/login" className="text-reset">
//                   Log In
//                 </a>
//               </p>
//               <p>
//                 <a href="/training" className="text-reset">
//                   Training
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="container-text-end text-md-center mt-5">
//           <div className="mt-3">
//             <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//               <p>
//                 <FaEnvelope icon="envelope" className="me-3" />
//                 getfit@info.com
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © 2023 Copyright
//       </div>
//     </footer>
//   );
// };

// export default Footer;
