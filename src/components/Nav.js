import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import Hamburger from "hamburger-react";
const Nav = ({ isOpen, setOpen }) => {
  return (
    <nav>
      <div className="nav">
        <img src={Logo} alt="logo" />
        <div className="md:hidden ">
          <Hamburger toggled={isOpen} toggle={setOpen} size="28" />
        </div>

        <ul className="navLinks">
          <li className="navLink">
            <Link to="/Home">Home</Link>
          </li>
          <li className="navLink">
            {/* <div></div> */}
            <Link to="/About">About</Link>
          </li>
          <li className="navLink">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="navLink">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navLink">
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
        <div className={isOpen ? "phoneNavLinks" : "hidden"}>
          <ul className="p-10 ">
            <li className="mb-4">
              <Link to="/Advantages">Advantages</Link>
            </li>
            <li className="mb-4">
              <Link to="/Articles">Articles</Link>
            </li>
            <li>
              <Link to="/Contact-us">Contact us</Link>
            </li>
          </ul>
        </div>

        <button className="Request-btn hidden md:block p-3 px-7">
          Request Invite
        </button>
      </div>
    </nav>
  );
};

export default Nav;
