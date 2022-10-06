import React from "react";
import "./HeroSection.css";
import FeatherIcon from "feather-icons-react";

const HeroSection = () => {
  return (
    <div className="herobackground">
      <div className="introduction">
        <p className="introname">
          Hi, I’m Oluwafemi Rachael Olayode{" "}
          <span className="middle">
            <FeatherIcon icon="smile" size={24} className="iconcolor" />
          </span>
        </p>
        <p className="catchphrase">
          I express my creativity through web platforms
        </p>
        <p className="catchdescription">
          As a seasoned frontend developer, i help business grow and reach
          client in an effective manner with great emphasis on great user
          experience, attainability, responsive design etc.
        </p>
        <button className="resumebtn">
          See my Resume <div id="slide"></div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
