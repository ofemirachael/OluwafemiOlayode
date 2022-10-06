import React from "react";
import "./Project.css";
import FeatherIcon from "feather-icons-react";
import projectone from "../../images/pixelart2.png";

const Project = () => {
  return (
    <div className="epdiv">
      <div>
        <img src={projectone} className="imgstl" />
      </div>
      <div className="projectdescription">
        <div className="pd">
          <p className="projecttitle">Pixel Art Maker</p>
        </div>
        <p className="projectdecs">
          Create unending pixel drawing with your desired colors and boxes by
          defining the grid size in height and width.
        </p>
        <div className="techstack">
          <div className="tech">HTML</div>
          <div className="tech">CSS</div>
          <div className="tech">JavaScript</div>
        </div>
        <div className="links">
          {" "}
          <a className="projectlinks">
            <FeatherIcon icon="github" size={24} />
          </a>
          <a className="projectlinks">
            <FeatherIcon icon="link" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
