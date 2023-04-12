import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertExample from "../component/Alert";

export const Contact = () => {
  const message = () => {
    return <AlertExample />;
  };

  return (
    <div className="mb-4">
      {/* <!--Section heading--> */}
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>
      {/* <!--Section description--> */}
      <h5 className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </h5>
      {/* 
        <!--Grid column--> */}

      <div className="justify-content-between align-items-center border border-bottom text-info shadow-sm p-3 mb-5 bg-body rounded">
        <div className="me-5 d-none d-lg-block">
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Chicago, USA</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>getfit@info.com</p>
              </li>
            </ul>
          </div>
        </div>

        {/* <!--Grid column--> */}
        <div className="container text-center my-3">
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                {/* <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                      <label className="">Your name</label>
                    </div>
                  </div>
                  {/* <!--Grid column-->
                                    <!--Grid column--> */}
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label className="">Your email</label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label className="">Subject</label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row-->
                                <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      />
                      <label>Your message</label>
                    </div>
                  </div>
                </div>
                {/* <!--Grid row--> */}
              </form>

              <div className="text-center text-md-middle">
                <AlertExample />
              </div>
              <div className="status" />
            </div>
            {/* <!--Grid column--> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
