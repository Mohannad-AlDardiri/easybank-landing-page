import React from "react";


const landing = ({ isOpen }) => {


  return (
    <div className={isOpen ? "landing landing-after" : "landing"}>
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
