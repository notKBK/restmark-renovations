import { useState, useEffect } from "react";
import "./WhyUs.css";
import useReveal from "../hooks/useReveal";

import { useNavigate } from "react-router-dom";

export default function WhyUs() {
  const [sectionRef, visible] = useReveal(0.12);

  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setTitleVisible(true);
      }, 250);

      return () => clearTimeout(timer);
    } else {
      setTitleVisible(false);
    }
  }, [visible]);
  return (
    <div className="why-us-container " ref={sectionRef}>
      <div className="why-us-left">
        <div className="why-us-left-title-container">
          <div
            className={`why-us-left-title ${
              titleVisible ? "reveal-active" : ""
            }`}
          >
            <div className="title-line">
              <span>Why</span>
            </div>

            <div className="title-line">
              <span>Us?</span>
            </div>
          </div>
          <div className="why-us-left-subtitle"></div>
        </div>
      </div>
      <div className="why-us-right">
        <div className="why-us-right-content">
          <div className="why-us-reason-container">
            <div className="why-us-reason">Refined Craftsmanship</div>
            <div className="why-us-reason-text">
              Every detail is approached with precision and care to deliver
              clean, timeless finishes that elevate your home. We focus on
              quality workmanship, sharp finishing details, and polished results
              that feel intentionally designed and professionally built.
            </div>
          </div>
        </div>
        <div className="why-us-right-content">
          <div className="why-us-reason-container">
            <div className="why-us-reason">Thoughtfully Managed Projects</div>
            <div className="why-us-reason-text">
              From planning to completion, we prioritize organization,
              communication, and a smooth renovation experience. Clear
              timelines, transparent pricing, and consistent updates help ensure
              every project stays professionally managed while keeping
              homeowners informed throughout the process.
            </div>
          </div>
        </div>
        <div className="why-us-right-content">
          <div className="why-us-reason-container">
            <div className="why-us-reason">Premium Quality Standards</div>
            <div className="why-us-reason-text">
              We use quality materials, skilled workmanship, and professional
              installation methods built to meet a higher standard. Our goal is
              to create renovations that not only look exceptional but also
              perform reliably and maintain their quality for years to come.
            </div>
          </div>
        </div>
        <div className="why-us-right-content">
          <div className="why-us-reason-container">
            <div className="why-us-reason">Tailored Design Approach</div>
            <div className="why-us-reason-text">
              Every renovation is customized to complement your home, lifestyle,
              and vision while maintaining a refined, cohesive look. Whether
              it’s a kitchen, bathroom, basement, addition, or full-home
              renovation, we create spaces designed to feel modern, functional,
              and uniquely personalized.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
