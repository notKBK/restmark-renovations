import "./Home.css";
import ServicesSection from "./ServicesSection";
import GetStarted from "../../components/GetStarted";
import WhyUs from "../../components/WhyUs";
import WhereMap from "../../components/WhereMap";
import Hero from "./Hero";
import ListContainer from "../../components/ListContainer";
import HomeAbout from "./HomeAbout";
import { useEffect } from "react";

import Testimonials from "./Testimonials";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | RestMark Renovations";
  }, []);
  return (
    <>
      <Hero></Hero>
      <ServicesSection></ServicesSection>

      <WhyUs></WhyUs>

      <ListContainer></ListContainer>
      <div className="where-map-container">
        <img className="where-we-work-bg" src="/work2-bg.jpg"></img>
        <div className="where-map-container2">
          <WhereMap></WhereMap>
        </div>
      </div>

      <Testimonials></Testimonials>
      <HomeAbout></HomeAbout>
    </>
  );
}
