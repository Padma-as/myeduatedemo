import React from "react";
import EduateLogo from "../images/EduateLogo.svg";
import Banner from "../images/MyEduateBanner.jpg";
import ContactUs from "../images/ContactUs.jpg";
import Footer from "../images/MyEduateDemoFooter.jpg";
const Index = () => {
  return (
    <>
      <div className="demo">
        {/* <div className="demo__header row g-0">
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
            <div className="demo__header--button-block">
              <button className="demo__header--button">Login</button>
            </div>
          </div>
        </div> */}
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img src={EduateLogo} alt="" />
              My Eduate
            </div>
          </div>
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <a href="/" target="_blank">
              Home
            </a>
            <a href="/" target="_blank">
              Why Us
            </a>
            <a href="/">Solutions</a>
            <a href="/" target="_blank">
              Our Team
            </a>
            <a href="/" target="_blank">
              Contact Us
            </a>
          </div>
          <div className="demo__header--button-block">
            <button className="demo__header--button">Login</button>
          </div>
        </div>
        <div className="demo__banner">
          <img src={Banner} alt="" className="demo__banner--image" />
        </div>
        <div className="demo__form">
          <div className="demo__form--image">
            <img src={ContactUs} alt="" />
          </div>
          <div className="demo__form--data">
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
            <div className="demo__form--button">
              <button className="demo__form--submit">Submit</button>
              <button className="demo__form--cancel">Cancel</button>
            </div>
          </div>
        </div>
        <div className="demo__footer">
          <div className="demo__footer--image-block">
            <img src={Footer} alt="" className="demo__banner--image" />
          </div>
          <div className="demo__footer--data-block ">
            <div className=" demo__footer--data-block--items">
              <div className="demo__footer--data-block--flex">
                <img src={EduateLogo} alt="" className="demo__header--image" />
                <b>My-Eduate</b>
              </div>

              <h4>Eduate Pvt. Ltd.</h4>
              <span>Infra house, Hennur-Bagalur</span>
              <span>Main Road,Kalyan Nagar</span>
              <span>Bengaluru 560 043,</span>
              <span>Karnataka,India</span>
            </div>
            <div className="  demo__footer--data-block--items">
              <h3>Explore</h3>
              <a href="/"> Home</a>
              <a href="/">Why Us</a>
              <a href="/">Solutions</a>
              <a href="/">Contact Us</a>
            </div>
            <div className="  demo__footer--data-block--items">
              <h3>Download App</h3>
            </div>
            <div className="">
              <h3>News letter</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
