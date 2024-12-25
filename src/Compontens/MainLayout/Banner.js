import React from "react";
import "../../style/Mainllayout/Banner.css";
import hand from "../../Image/hand.webp";
import Artboard from "../../Image/Artboard.webp";
import program from "../../Image/program.webp";
import hero from "../../Image/hero.webp";

function Banner() {
  return (
    <>
      <div className="banner-cover">
        <div className="cover-big-imgs">
          <div className="cover-big-img">
            <div className="text-cover d-none d-lg-block ">
              <p className="banner-text">Explore Certificate program</p>
              <button className="button">Get Certified</button>
            </div>
            <img className="img-big img-fluid" src={hand} alt="hand"></img>
          </div>

          <div className="cover-big-img">
          <div className="text-cover  d-none d-lg-block">
              <p className="banner-text">Explore Certificate program</p>
              <button className="button">Get Certified</button>
            </div>
            <img
              className="img-big banner-img img-fluid position-relative img-position"
              src={Artboard}
              alt="artboard"
            ></img>
          </div>
        </div>

        <div className="cover-small-imgs m-auto">
          <div className="cover-small-img">
          <div className="text-cover d-lg-block d-none d-lg-block">
              <p className="banner-text">Explore Certificate program</p>
              <button className="button">Get Certified</button>
            </div>
            <img className="img-small img-fluid" src={hero} alt="hero"></img>
          </div>

          <div className="cover-small-img">
          <div className="text-cover  d-none d-lg-block">
              <p className="banner-text">Explore Certificate program</p>
              <button className="button">Get Certified</button>
            </div>
            <img
              className="img-small img-fluid"
              src={program}
              alt="program"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
