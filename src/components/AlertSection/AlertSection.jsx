import React from "react";
import "./AlertSection.css";
import Marquee from "react-fast-marquee";

const Alert = () => {
  return (
    <div className="Alert">
      <Marquee>
        <a href="/" className="hyperlinks">
          "//DRINKING WATER available at station through WATER VENDING MACHINES
          at affordable price//"{" "}
        </a>
        <a href="/" className="hyperlinks">
          <span className="yellow">
            "//MSME vendors may send their queries to
            <span className="ligblue"> msmesupport@irctc.com</span> for
            assistence//
          </span>
        </a>
      </Marquee>
    </div>
  );
};

export default Alert;
