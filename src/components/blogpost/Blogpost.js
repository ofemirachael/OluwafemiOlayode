import React from "react";
import "./Blogpost.css";
import Posts from "../posts/Posts";

const Blogpost = () => {
  return (
    <div className="aboutbg">
      <div className="aboutdiv ">
        <div className="titlediv">
          <p className="title">Blog Post</p>
          <div className="underline"></div>
        </div>
        <div className="bloglist">
          {" "}
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
