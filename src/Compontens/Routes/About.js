import React from "react";
import "../../style/Aboutus.css";
import lulogo from "../../Image/lulogo.webp";
import { Link } from "react-router-dom";

import about from "../../Image/about/about.webp";
import about2 from "../../Image/about/about2.webp";
import aboutlogo from "../../Image/about/about-logo.webp";
function About() {
  return (
    <>
      <div className="aboutus">
        <div className=" warpper-about-logo ">
          <Link to="/">
            <img className="about-logo" alt="logo" src={lulogo} logo></img>
          </Link>
        </div>

        <div className=" warpper-about-content">
          <div className=" sidebar col-3 ">
            <ul className=" list-sidebar">
              <li>Dashbord</li>
              <li>Explore</li>
              <li>Myprogram</li>
            </ul>
            <ul className=" list-sidebar">
              <li>Certificate</li>
              <li>Rewards</li>
              <li>Refer & Earn</li>
              <li>LU Coins</li>
            </ul>
            <ul className=" list-sidebar">
              <li>Student Ambassador</li>
              <li>Commutity</li>
            </ul>
          </div>
          <div className=" center-content col-6">
            <div className=" title-about">About us</div>
            <div>
              <div className="center-about pt-5">
                <div className="color1">
                  <div className="color2">
                    <img
                      className="about-center-logo"
                      src={aboutlogo}
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="center-about-content mb-3">
                  <p>About</p>
                  <h1 className="about-h1">LetsUpgrade</h1>
                </div>
                <div>
                  <h2 className=" about-subtitle d-flex ">Reimagine Online Upskilling Education</h2>
                </div>
                <div className=" w-100">
                  <p className="about-content"><span className="about-span">Letsupgrade.in</span> is India's largest higher education learning community 
                    for students enrolled in Indian degree programs. With 
                    1.5 million students and a 45% market share among BTech 
                    / BE students in India; LetsUpgrade EdTech offers many 
                    upskilling courses 
                    in Tech, Design, Management, Business, and Data.</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-3">
            <img className="about-img " src={about} alt="referance" />
            <img className="about-img" src={about2} alt="referance" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
