import { useEffect, useRef, useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Sebastian did an amazing job on our bathroom renovation. The attention to detail and communication throughout the project made the entire process stress free. Everything was completed cleanly and on schedule. We’re extremely happy with the final result.",
      name: "Sofia Z.",
      date: "February 2026",
    },
    {
      text: "Reliable, honest, and high quality work. The entire renovation process felt smooth and stress free from beginning to end.",
      name: "Lucas H.",
      date: "January 2026 ",
    },
    {
      text: "Everything was completed on time and the final result completely transformed our home. We would absolutely hire them again.",
      name: "Olivia P.",
      date: "November 2025",
    },
    {
      text: "Very professional experience overall. Communication was clear, pricing was straightforward, and the quality of work exceeded our expectations. The project stayed organized and the workspace was always kept surprisingly clean.",
      name: "Chris L.",
      date: "October 2025",
    },
  ];

  const DURATION = 5500;

  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startCycle = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, DURATION);
  };

  const nextSlide = () => {
    setVisible(false);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setVisible(true);
    }, 350);
  };

  const goToSlide = (index) => {
    if (index === active) return;

    clearInterval(intervalRef.current);

    setVisible(false);

    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActive(index);
      setVisible(true);
      startCycle();
    }, 350);
  };

  const [sectionRef, titleVisible] = useReveal(0.45);

  useEffect(() => {
    startCycle();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-inner">
        <div
          className={`testimonials-header ${titleVisible ? "reveal-active" : ""}`}
        >
          <div className="home-subtitle title-line">
            <span>Testimonials</span>
          </div>

          <div className="home-title">
            <div className="title-line">
              <span>What Our</span>
            </div>
            <div className="title-line">
              <span>
                <span className="gold-text">Clients</span> Say
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div
            key={active}
            className={`testimonial-content ${
              visible ? "testimonial-show" : "testimonial-hide"
            }`}
          >
            <div className="testimonial-quote"></div>

            <div className="testimonial-text">{testimonials[active].text}</div>

            <div className="testimonial-bottom">
              <div className="testimonial-name">
                {testimonials[active].name}
              </div>

              <div className="testimonial-date">
                {testimonials[active].date}
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-progress-wrap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-progress ${
                active === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`testimonial ${index + 1}`}
            >
              {active === index && (
                <div
                  key={active}
                  className="testimonial-progress-fill"
                  style={{
                    animationDuration: `${DURATION}ms`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
