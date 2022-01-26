import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-12 w-full h-full ">
      <h1 className="text-3xl lg:text-7xl " style={{ padding: "3rem" }}>
        This website doesn't include other pages because it's just a design for
        an unreal bank.
      </h1>
      <Link
        to="/easybank-landing-page"
        style={{
          padding: "1rem",
          backgroundColor: "rgb(49, 211, 92)",
          borderRadius: "0.5rem",
          color: "white",
        }}
      >
        back
      </Link>
    </div>
  );
};
export default NotFound;
