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
            <Link to="easybank-landing-page/Home">Home</Link>
          </li>
          <li className="navLink">
            {/* <div></div> */}
            <Link to="easybank-landing-page/About">About</Link>
          </li>
          <li className="navLink">
            <Link to="easybank-landing-page/Contact">Contact</Link>
          </li>
          <li className="navLink">
            <Link to="easybank-landing-page/blog">Blog</Link>
          </li>
          <li className="navLink">
            <Link to="easybank-landing-page/careers">Careers</Link>
          </li>
        </ul>
        <div className={isOpen ? "phoneNavLinks" : "hidden"}>
          <ul className="p-10 ">
            <li className="mb-4">
              <Link to="easybank-landing-page/Advantages">Advantages</Link>
            </li>
            <li className="mb-4">
              <Link to="easybank-landing-page/Articles">Articles</Link>
            </li>
            <li>
              <Link to="easybank-landing-page/Contact-us">Contact us</Link>
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
