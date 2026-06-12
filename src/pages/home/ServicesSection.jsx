import "./ServicesSection.css";
import useReveal from "../../hooks/useReveal";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function ServicesSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [sectionRef, visible] = useReveal(isMobile ? 0.05 : 0.2);
  const services = [
    { title: "Full Home Renovations", image: "/fullhome.jpg" },
    { title: "Bathroom Finishing", image: "/bathroom.jpg" },

    { title: "Kitchen Renovations", image: "/kitchen.jpg" },
    { title: "Basement Renovations", image: "/basement.jpg" },
    { title: "Home Additions", image: "/outdoor.jpg" },
    { title: "View All Services", image: "" },
  ];

  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const reasons = [
    "Transparent Pricing",
    "High-End Craftsmanship",
    "Fast Communication",
    "Built Around Your Vision",
  ];

  useEffect(() => {
    if (visible) {
      const titleTimer = setTimeout(() => {
        setTitleVisible(true);
      }, 290);

      const cardsTimer = setTimeout(() => {
        setCardsVisible(true);
      }, 650);

      return () => {
        clearTimeout(titleTimer);
        clearTimeout(cardsTimer);
      };
    } else {
      setTitleVisible(false);
      setCardsVisible(false);
    }
  }, [visible]);

  return (
    <div className="services-container">
      <section ref={sectionRef} className="services-section">
        <div
          className={`services-header ${titleVisible ? "reveal-header" : ""}`}
        >
          <div className="section-label home-title">
            <div
              className={`my-section ${titleVisible ? "reveal-active" : ""}`}
            >
              <div className="title-line">
                <span>Our Services</span>
              </div>
            </div>
          </div>
          <span>Professional renovation services for Hamilton homeowners.</span>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className={`service-card-wrapper ${cardsVisible ? "cards-visible" : ""}`}
              key={index}
              style={{
                transitionDelay: `${index * 0.15}s`,
              }}
            >
              <div className="service-card-border">
                <div className="service-card-inner">
                  <div
                    className={`service-card 
    
    ${!service.image ? "service-card-solid" : ""}
  `}
                  >
                    <div className="service-card-image">
                      {service.image && (
                        <img src={service.image} alt={service.title} />
                      )}
                    </div>
                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-arrow"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
