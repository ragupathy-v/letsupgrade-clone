import React from "react";
import "../../style/Mainllayout/Collages.css";
import Marquee from "react-fast-marquee";
import IITH from "../../Image/college/IITH.webp";
import IITD from "../../Image/college/IITD.webp";
import NIT from "../../Image/college/NIT.webp";
import VIT from "../../Image/college/VIT.webp";
import NITS from "../../Image/college/NITS.webp";
import NITAP from "../../Image/college/NITAP.webp";
import CU from "../../Image/college/CU.webp";
import SI from "../../Image/college/SI.webp";
import NITP from "../../Image/college/NITP.webp";
import BVDU from "../../Image/college/BVDU.webp"
import Footer from "../Layout/Footer";


function Collages() {
  const colimages = [
    {
      image: IITH,
      text: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
    },
    {
      image: IITD,
      text: "Indian Institute of Technology (Indian School of Mines) Dhanbad (IIT ISM Dhanbad)",
    },
    {
      image: VIT,
      text: "Vellore Institute of Technology (VIT), Vellore",
    },
    {
      image:NIT,
      text:'National Institute of Technology, Silchar'
    },
    {
      image:NITS,
      text:'National Institute of Technology, SrinagarNational Institute of Technology, Srinagar'
    },
    {
      image:NITAP,
      text:'National Institute of Technology, Andhara pradesh'
    },
    {
      image:SI,
      text:'Symbiosis International University'
    },
    {
      image:CU,
      text:'Christ University, Bangalore'
    },
    {
      image:NITP,
      text:'National Institute of technology, Patna' 
    }, 
    {
      image:BVDU,
      text:'Bharati Vidyapeeth Deemed University, Pune' 
    }, 
    {
      image:NIT,
      text:'National Institute of Technology, Silchar'
    },
  ];
  return (
    <div className=" collage-wapper">
      <div className="space-div">
        <div className=" head-div">
          <hr className="line"></hr>
          <p className="head-para">CERTIFICATE PROGRAMS</p>
          <hr className=" line"></hr>
        </div>
        <p className=" collage-head-para2">
          Students From Top Colleges Upskill With LetsUpgrade
        </p>

        <p className=" collage-head-para3">
          Students Enroll in Universities For Degrees, But They Turn to
          LetsUpgrade for skills
        </p>
        <div className="collage-marquee ">
          <Marquee>LEARN bUILD SHARE GROW</Marquee>
        </div>
        <Marquee>
          {colimages.map((data, index) => (
            <div key={index} className=" college-img-marquee">
              <img className="college-img" src={data.image} alt="uuu" />
              <p className=" college-text">{data.text}</p>
            </div>
          ))}
        </Marquee>
        <Marquee direction="right">
          {colimages.map((data, index) => (
            <div className=" college-img-marquee">
              <img className="college-img" src={data.image} alt="uuu" />
              <p className=" college-text">{data.text}</p>
            </div>
          ))}
        </Marquee>
      </div>
       <Footer/>
    </div>
  );
}

export default Collages;
