import React from "react";
//import "./components/Footer.css";

import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import { FaEnvelope, FaGem, FaGoogle } from "react-icons/fa";

export const Footer = () => {
  return (
      <footer bgColor="dark" className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <FiFacebook icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <FiTwitter icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <FaGoogle icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <FiInstagram icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <FiLinkedin icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <FiGithub icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container-text-start text-md-center mt-5">
            <div className="mt-3">
              <div className="md-3 lg-4 xl-3">
                <h6 className="text-uppercase fw-bold mb-4">
                  <FaGem icon="gem" className="me-3" />
                  GET FIT.com
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>

          <div className="container-text-center text-md-center mt-5">
            <div className="mt-3">
              <div className="Col md-3 lg-2 xl-2">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Register
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Log In
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Personal Trainer
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="container-text-end text-md-center mt-5">
            <div className="mt-3">
              <div className="Col md=4" lg="3" xl="3" mx-auto mb-md-0 mb="4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaEnvelope icon="envelope" className="me-3" />
                  getfit@info.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright
        </div>
      </footer>
  );
};
