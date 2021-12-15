import React from "react";
import Logo from "./images/logo.svg";
import Hamburger from "hamburger-react";
const Nav = ({ isOpen, setOpen }) => {
  return (
    <nav>
      <div className="nav">
        <img src={Logo} alt="logo"/>
        <div className="md:hidden ">
          <Hamburger toggled={isOpen} toggle={setOpen} size="28" />
        </div>

        <ul className="navLinks">
          <li className="navLink">
            <a href="Home">Home</a>
          </li>
          <li className="navLink">
            <div></div>
            <a href="About">About</a>
          </li>
          <li className="navLink">
            <a href="Contact">Contact</a>
          </li>
          <li className="navLink">
            <a href="blog">Blog</a>
          </li>
          <li className="navLink">
            <a href="careers">Careers</a>
          </li>
        </ul>
        {/* <div className="flex "> */}
          <div className={isOpen ? "phoneNavLinks" : "hidden"}>
            <ul className="p-10 ">
              <li className="mb-4">
                <a href="Advantages">Advantages</a>
              </li>
              <li className="mb-4">
                <a href="Articles">Articles</a>
              </li>
              <li>
                <a href="Contact-us">Contact us</a>
              </li>
            </ul>
          </div>
        {/* </div> */}

        <button className="Request-btn hidden md:block p-3 px-7">
          Request Invite
        </button>
      </div>
    </nav>
  );
};

export default Nav;
