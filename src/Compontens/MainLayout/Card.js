import React from "react";
import "../../style/Mainllayout/Card.css";
//importing card images
import react from "../../Image/cardimage/React.webp";
import postman from "../../Image/cardimage/postman.webp";
import javascript from "../../Image/cardimage/javascript.webp";
import Figma from "../../Image/cardimage/Figma.webp";
import chatgpt from "../../Image/cardimage/chatgpt.webp";
import  sql from "../../Image/cardimage/sql.webp";
import python from "../../Image/cardimage/python.webp";

function Card() {
  const carddata = [
    {
      image: react,
      text: "react Fundamentals Student Expert Certification",
      enroled: "24.4k Enrolled",
    },
    {
      image: postman,
      text: "Postman API Fundamentals Student Expert Certification",
      enroled: "12.4k Enrolled",
    },
    {
      image: chatgpt,
      text: "Chatgpt Fundamentals Student Expert Certification",
      enroled: "17.4k Enrolled",
    },
    {
      image: javascript,
      text: "Javascript Fundamentals Student Expert Certification",
      enroled: "18.4k Enrolled",
    },
    {
      image: Figma,
      text: "Figma Fundamentals Student Expert Certification",
      enroled: "7.4k Enrolled",
    },
    {
      image: sql,
      text: "Sql Fundamentals Student Expert Certification",
      enroled: "14.4k Enrolled",
    },
    {
        image: python,
        text: "Python Fundamentals Student Expert Certification",
        enroled: "22.4k Enrolled",
      }
  ];
  return (
    <div className="card-row">
      {carddata.map((data, index) => (
        <div className=" cards">
          <img src={data.image} alt="card-image" className=" card-image "></img>
          <div className="card-text">
            <p>{data.enroled}</p>
            <p>{data.text}</p>
          </div>
          <div className="card-bottom">
            <button className=" card-button">Enroll Now</button>
            <div className=" d-flex">
              <p className="card-amount mt-1">4999</p>
              <p className=" mt-1 ">  0</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
