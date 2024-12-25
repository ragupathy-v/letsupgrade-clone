import React from "react";
import "../../style/Mainllayout/Certivicateprogram.css";
import Marquee from "react-fast-marquee";
import Card from "./Card";
function Certivicateprogram() {
  return (
    <>
      <div className=" certivicateprogram-warpper">
        <div className=" space-div">
          <div className=" head-div">
            <hr className="line"></hr>
            <p className="head-para">CERTIFICATE PROGRAMS</p>
            <hr className=" line"></hr>
          </div>
          <p className=" head-para2">All from Basic to Advance</p>

          <p className=" head-para3">
            Earn certificate from LetsUpgrade, GDG MAD - Google Developer Group
            Mumbai, NSDC, and ITM Group of Institutions
          </p>
          <div className="certivicate-marquee ">
            <Marquee>INDUSTRY LEATING CERTIFICATION</Marquee>
          </div>
        </div>
        <Card />
      </div>
    </>
  );
}

export default Certivicateprogram;
