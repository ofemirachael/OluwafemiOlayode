import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import FeatherIcon from "feather-icons-react";

const Header = () => {
  const menuclick = (e) => {
    e.preventDefault();
    let menu = document.getElementById("navl");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  return (
    <nav className="navb">
      <a>
        <img src={logo} />
      </a>

      <div className="headernav">
        <div className="justnav">
          <div className="menuicon" onClick={menuclick}>
            <FeatherIcon icon="menu" size={24} />
          </div>

          <ul className="navlist" id="navl">
            <li className="navitem">About</li>
            <li className="navitem">Project</li>
            <li className="navitem">Blog</li>
            <li className="navitem">Contact</li>
            <li className="navitem">
              <button className="btn-gen">Resume</button>
            </li>
          </ul>
        </div>

        <div className="navsettings">
          <FeatherIcon icon="moon" size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
