import React from "react";
import About from "../components/about/About";
import Header from "../components/header/Header";
import HeroSection from "../components/herosection/HeroSection";
import Projects from "../components/projects/Projects";
import Socials from "../components/socials/Socials";

const Profile = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Socials />
      <About />
      <Projects />
    </>
  );
};

export default Profile;
