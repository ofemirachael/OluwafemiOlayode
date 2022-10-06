import React from "react";
import Project from "../project/Project";
import "./Projects.css";
import FeatherIcon from "feather-icons-react";

const Projects = () => {
  let ref = React.createRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div className="projectsection">
      <div className="projectsdiv">
        <p className="titlep">Projects i’ve worked on</p>
        <div className="underline"></div>

        <div className="pddiv" ref={ref}>
          <div className="navigation">
            <div className="navarrow leftarrow" onClick={() => scroll(-590)}>
              {" "}
              <FeatherIcon icon="chevron-left" size={12} />
            </div>
            <div className="navarrow rightarrow" onClick={() => scroll(590)}>
              {" "}
              <FeatherIcon icon="chevron-right" size={12} />
            </div>
          </div>
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

export default Projects;
