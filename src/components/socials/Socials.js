import React from "react";
import FeatherIcon from "feather-icons-react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socialiconsdiv">
      <div className="socialicon">
        <FeatherIcon icon="github" size={24} className="iconcolor" />
      </div>
      <div className="socialicon">
        <FeatherIcon icon="linkedin" size={24} className="iconcolor" />
      </div>
      <div className="socialicon">
        <FeatherIcon icon="twitter" size={24} className="iconcolor" />
      </div>
      <div className="socialicon">
        <FeatherIcon icon="book" size={24} className="iconcolor" />
      </div>
      <div className="socialicon">
        <FeatherIcon icon="instagram" size={24} className="iconcolor" />
      </div>
    </div>
  );
};

export default Socials;
