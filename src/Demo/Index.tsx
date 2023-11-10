import React from "react";
import EduateLogo from "../images/EduateLogo.svg";
import Banner from "../images/MyEduateBanner.jpg";
import ContactUs from "../images/ContactUs.jpg";
const Index = () => {
  return (
    <>
      <div className="demo">
        <div className="demo__header row g-0">
          <div className="col-3">
            <div className="demo__header--logo">
              <img src={EduateLogo} alt="" className="demo__header--image" />
              <b>My-Eduate</b>
            </div>
          </div>
          <div className="col">
            <ul className="demo__header--links">
              <li className="demo__header--links--li">
                <a href="/">Home</a>
              </li>
              <li className="demo__header--links--li">
                <a href="/">Why Us</a>
              </li>
              <li className="demo__header--links--li">
                <a href="/">Solutions</a>
              </li>
              <li className="demo__header--links--li">
                <a href="/">Our Team</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div className="demo__header--button">
              <button>Login</button>
            </div>
          </div>
        </div>
        <div className="demo__banner">
          <img src={Banner} alt="" className="demo__banner--image" />
        </div>
        <div className="demo__form row g-0">
          <div className="col">
            <img src={ContactUs} alt="" className="demo__form--image" />
          </div>
          <div className="col">
            <div className="demo__form--title">
              <h4>Book a Demo</h4>
              <label>Name </label>
              <input></input>
              <label>Email Id</label>
              <input></input>
              <label>Contact No</label>
              <input></input>
              <label>Institution Name</label>
              <input></input>
              <label>Message</label>
              <textarea rows={3}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
