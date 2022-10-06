import React from "react";
import "./About.css";
import profilephoto from "../../images/oluwafemiphoto.png";

const About = () => {
  return (
    <div className="aboutbg">
      <div className="aboutdiv">
        <div className="details">
          <div className="writeupdiv">
            <div className="titlediv">
              <p className="title">Who am i?</p>
              <div className="underline"></div>
            </div>
            <p>
              Oluwafemi Rachael is a software developer focused on fronted
              development, with an avid love for User interface design. I have
              been priviledge to work with startups, focused on aesthetic
              design, customer satisfaction and ultimately great usable
              products. I also have work experience with consulting firm with
              the goal of providing easy management to SMEs. I have been
              opprotuned to work on government based project such as a state
              envoironmental protection, Oil and gas registration and processes,
              enterprise applications with goals to provide business insights,
              reporting, inventory, sale, human resource management etc.
            </p>
            <p>
              In addition to bringing a project to life, the plectoral of soft
              skills such as teamwork, attention to details, communication,
              problem solving, strategic thinking, active listening, open
              mindedness, emotional inteligence as been a significant touch to
              project success. I also have 3 years work experience building
              product with design tools such as Figma and Adobe XD, technical
              tools such as HTML, Css, JavaScript, ReactJs, i have also built
              products with Python(Flask), Postgreql, handled CI/CD with GitHub,
              Docker and also deploy on AWS platform.
            </p>
          </div>
          <div className="imagediv">
            <div className="firstbox">
              <div className="firstbox negative-margin">
                <div className="firstbox negative-margin">
                  <img
                    src={profilephoto}
                    className="imagesection negative-margin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
