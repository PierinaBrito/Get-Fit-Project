import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/component/main.css";

import { BsStars } from "react-icons/bs";
import { HiClipboardCheck } from "react-icons/hi";
import img2 from "../../img/assets/home/AdobeStock7.jpeg";
import img3 from "../../img/assets/home/AdobeStock6.jpeg";
import img4 from "../../img/assets/home/AdobeStock4.jpeg";
import img5 from "../../img/assets/home/AdobeStock8.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img2,
    servTitle: "User",
    name: "Login",
    grade: "Explore Our Programs",
    fees: "Free",
    desc: "Join to Our Fitness Community and Transform your Body and Mind!",
  },
  {
    id: 2,
    imgSrc: img3,
    servTitle: "Personal Trainer",
    name: "Search",
    grade: "Strength Training",
    fees: "Get a quote",
    desc: "The fitness professional provide guidance on proper form and technique to prevent injury and maximize results.",
  },
  {
    id: 3,
    imgSrc: img4,
    servTitle: "Intelligent App",
    name: "Register",
    grade: "Fit Activity Tracker",
    fees: "Free",
    desc: "This is your Ultimate Guide to Health and Wellness!",
  },
  {
    id: 4,
    imgSrc: img5,
    servTitle: "Online Workout",
    name: "Explore",
    grade: "Videos and Rutines",
    fees: "Free",
    desc: "Here you have a thousand of videos and rutines for you to get rid of your fat and lose weight!",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <div data-aos="fade-right" className="title">
          <div>
            <span className="stroke-text">SHAPE YOUR </span>
            <span>IDEAL BODY </span>
          </div>
          <div></div>
        </div>
      </div>

      <div className="secContent grid">
        {/* {Data.map(({ id, imgSrc, servTitle, name, grade, fees, desc }) => {
          return ( */}
        <div key="1" data-aos="fade-up" className="singleServices">
          <div className="imageDiv">
            <img src={img2} type="img"></img>
          </div>

          <div className="cardInfo">
            <h4 className="servTitle">"User"</h4>
            <span className="continent flex">
              <BsStars className="icon" />
              <span className="name">Login</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>Explore Our Programs</span>
              </div>
              <div className="price">
                <h5>Free</h5>
              </div>
            </div>

            <div className="desc">
              <p>
                "Join to Our Fitness Community and Transform your Body and
                Mind!"
              </p>
            </div>

            <button className="btn flex">
              <Link to="/login">
                DETAILS <HiClipboardCheck className="icon" />
              </Link>
            </button>
          </div>
        </div>

        <div key="2" data-aos="fade-up" className="singleServices">
          <div className="imageDiv">
            <img src={img3} type="img"></img>
          </div>

          <div className="cardInfo">
            <h4 className="servTitle">"Personal Trainer"</h4>
            <span className="continent flex">
              <BsStars className="icon" />
              <span className="name">Search</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>Strength Training</span>
              </div>
              <div className="price">
                <h5>Get a quote</h5>
              </div>
            </div>

            <div className="desc">
              <p>
                The fitness professional provide guidance on proper form and
                technique to prevent injury and maximize results.'
              </p>
            </div>

            <button className="btn flex">
              DETAILS <HiClipboardCheck className="icon" />
            </button>
          </div>
        </div>

        <div key="3" data-aos="fade-up" className="singleServices">
          <div className="imageDiv">
            <img src={img4} type="img"></img>
          </div>

          <div className="cardInfo">
            <h4 className="servTitle">"Intelligent App"</h4>
            <span className="continent flex">
              <BsStars className="icon" />
              <span className="name">Register</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>Fit Activity Tracker</span>
              </div>
              <div className="price">
                <h5>Free</h5>
              </div>
            </div>

            <div className="desc">
              <p>This is your Ultimate Guide to Health and Wellness!</p>
            </div>

            <button className="btn flex">
              <Link to="/signup">
                DETAILS <HiClipboardCheck className="icon" />
              </Link>
            </button>
          </div>
        </div>

        <div key="4" data-aos="fade-up" className="singleServices">
          <div className="imageDiv">
            <img src={img5} type="img"></img>
          </div>

          <div className="cardInfo">
            <h4 className="servTitle">"Online WorkOut"</h4>
            <span className="continent flex">
              <BsStars className="icon" />
              <span className="name">Explorer</span>
            </span>

            <div className="fees flex">
              <div className="grade">
                <span>Videos & Routines</span>
              </div>
              <div className="price">
                <h5>Free</h5>
              </div>
            </div>

            <div className="desc">
              <p>
                Here you have a thousand of videos and routines for you to get
                rid of your fat and lose weight.{" "}
              </p>
            </div>

            <button className="btn flex">
              DETAILS <HiClipboardCheck className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
