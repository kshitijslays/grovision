"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects"
import CTASection from "./components/CallToAction";
import FooterSection from "./components/Footer";
import Loader from "./components/Loader";
import Velocity from "./components/Velocity";
import Team from "./components/Team"
import Faqs from "./components/Faqs"
import Founders from "./components/Founders"
import Testimonials from "./components/Testimonial";

const Page = () => {
  const [loading, setLoading] = useState(true);

  const handleVideoEnd = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onFinish={handleVideoEnd} />}
      {!loading && (
        <>
          <Navbar />
          <div id="home">
            <HeroSection />
          </div>
          <div id="services">
            <Services/>
          </div>
          <div id="projects">
            <Projects />
          </div>
          <Founders />
          <div id="team">
            <Team />
          </div>
          <CTASection />
          <div id="faqs">
            <Faqs />
          </div>
           <div id = "testimonials">
          <Testimonials />
          </div>
          <Velocity />
         
          <FooterSection />
        </>
      )}
    </>
  );
};

export default Page;