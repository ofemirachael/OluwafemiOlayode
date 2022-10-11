import React from "react";
import "./Blogpost.css";
import Posts from "../posts/Posts";

const Blogpost = () => {
  return (
    <div className="aboutbg">
      <div className="blogdiv ">
        <div className="titlediv">
          <p className="title">Blog Posts</p>
          <div className="underline"></div>
        </div>
        <div className="bloglist">
          {" "}
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
