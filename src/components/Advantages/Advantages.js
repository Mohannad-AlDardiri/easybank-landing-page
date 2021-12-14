import React from "react";
import Cards from "./cards";

const Advantages = () => {
  return (
    <div className="Advantages">
      <div className="Advantages-text">
        <h2>Why choose Easybank</h2>
        <p>
          We leverage Open Banking to turn your bank accoutn into your financial
          hub. Control Your finances like never before.
        </p>
      </div>
      <div className="advantages-cards">
        <Cards />
      </div>
    </div>
  );
};

export default Advantages;
