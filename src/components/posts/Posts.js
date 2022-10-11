import React from "react";
import "./Post.css";
import blogpost from "../../images/blogpost.png";
import FeatherIcon from "feather-icons-react";

const Posts = () => {
  return (
    <div>
      <div className="postcard">
        <img src={blogpost} className="postimage" />

        <p className="postheadings">Integrating Auth0 with ReactJs</p>
        <p className="peakpost">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate.
        </p>
        <FeatherIcon
          icon="external-link"
          size={24}
          className="iconcolor externallink"
        />
      </div>
    </div>
  );
};

export default Posts;
