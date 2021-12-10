import React from "react";
import mockupsImg from "./images/mockupsImg.png";
import bg_intro_mobaile from "./images/bg-intro-mobile.svg";
import bg_intro_desktop from "./images/bg-intro-desktop.svg";

const landing = ({ isOpen }) => {
  let intro_bg = bg_intro_mobaile;

  if (window.matchMedia("(min-width: 768px)").matches) {
    intro_bg = bg_intro_desktop;
  }
  console.log(intro_bg);

  return (
    <div className={isOpen ? "landing landing-after" : "landing"}>
      <div className="landing-images ">
        <img src={intro_bg} alt="nothing" className="bg-intro" />
        <img src={mockupsImg} alt="mockups img" className="mockups" />
      </div>

      <div className="landing-text">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving budgeting, investing, and much more
        </p>
        <button className="landing-btn">Request Invite</button>
      </div>
    </div>
  );
};

export default landing;
