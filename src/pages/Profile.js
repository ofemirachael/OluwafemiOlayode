import React from "react";
import About from "../components/about/About";
import Blogpost from "../components/blogpost/Blogpost";
import Footer from "../components/footer/Footer";
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
      <Blogpost />
      <Footer />
    </>
  );
};

export default Profile;
