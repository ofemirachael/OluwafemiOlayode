import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import FeatherIcon from "feather-icons-react";

const Header = () => {
  return (
    <nav className="navb">
      <a>
        <img src={logo} />
      </a>

      <div className="">
        <ul className="navlist">
          <li className="navitem">About</li>
          <li className="navitem">Project</li>
          <li className="navitem">Blog</li>
          <li className="navitem">Contact</li>
          <li className="navitem">
            <button className="btn-gen">Resume</button>
          </li>
          <li className="navitem">
            <FeatherIcon icon="moon" size={12} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
