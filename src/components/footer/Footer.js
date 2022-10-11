import React from "react";
import "./Footer.css";
import FeatherIcon from "feather-icons-react";

const Footer = () => {
  return (
    <div className="projectsection">
      <div className="projectsdiv">
        <div className="footerdiv textwhite">
          <div>
            <p className="">
              {" "}
              © 2022 Designed & built by Oluwafemi Rachael, Olayode{" "}
              <span className="iconcolor iconmiddle">
                {" "}
                <FeatherIcon icon="heart" size={24} />
              </span>
            </p>
          </div>
          <div>
            {" "}
            <span className="iconmiddle">
              <FeatherIcon icon="mail" size={24} />{" "}
            </span>
            oludareoluwafemirachael@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
