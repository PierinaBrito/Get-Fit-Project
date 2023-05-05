import React, { useEffect } from "react";
import '../../styles/component/hero.css';
import img1  from '../../img/home/AdobeStock1.jpeg';

import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsListTask, BsSearch } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[])


    return(
        <section className="hero">
            <div className="overlay"></div>
            <img src={img1} type="img/jpeg"></img>

            <div className="heroContent container">
                <div className="textDiv">

                    <span data-aos="fade-up"
                    className="smallText">
                        Welcome to
                    </span>

                    <h1 data-aos="fade-up"
                    className="heroTitle">
                        Get Fit
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">

                    <div className="trainersearchInput">
                        <label htmlFor="city">Search a Trainer: </label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter location" />
                            <ImLocation2 className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Select date: </label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price: </label>
                            <h3 className="total">$500</h3>
                        </div>

                        <div className="input flex">
                            <input type="range" max="500" min="50" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <BsSearch className="icon" />
                        <span>Search</span>
                    </div>

                </div>

                {/* <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FiTwitter className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>

                </div> */}


            </div>
        </section>
        
    )
}

export default Hero























// import React from "react";
// import "../../styles/component/hero.css";

// const Hero = ({ imageSrc }) => {
//   return (
//     <div className="Hero">
//       <img src={imageSrc} alt="fit" className="hero_image" />
//       {/*<h1 className="hero_title"> Get Fit </h1> */}
//     </div>
//   );
// };

// export default Hero;
