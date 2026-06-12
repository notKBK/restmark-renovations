import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const images = [
    "/kitchen.jpg",
    "/bathroom.jpg",
    "/outdoor.jpg",
    "/fullhome.jpg",
    "/basement.jpg",
  ];

  const [activeImage, setActiveImage] = useState(0);

  const [titleActive, setTitleActive] = useState(false);
  const [textActive, setTextActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [imageActive, setImageActive] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setImageActive(true);
    }, 250);

    const titleTimer = setTimeout(() => {
      setTitleActive(true);
    }, 250);

    const textTimer = setTimeout(() => {
      setTextActive(true);
    }, 950);

    const buttonTimer = setTimeout(() => {
      setButtonActive(true);
    }, 1200);

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(titleTimer);
      clearTimeout(textTimer);
      clearTimeout(buttonTimer);
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className={`hero-left ${imageActive ? "hero-image-active" : ""}`}>
          <div className="hero-image-frame">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className={`hero-image ${
                  activeImage === index ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hero-right">
          <div className={`hero-title ${titleActive ? "reveal-active" : ""}`}>
            <div className="title-line">
              <span>Built with</span>
            </div>

            <div className="title-line">
              <span>
                <span className="gold-text">craftsmanship</span>,
              </span>
            </div>

            <div className="title-line">
              <span>driven by</span>
            </div>

            <div className="title-line">
              <span>
                <span className="gold-text">detail</span>
              </span>
            </div>
          </div>

          <div className={`hero-text ${textActive ? "reveal-active" : ""}`}>
            <div className="title-line">
              <span>
                Helping homeowners create clean, functional, and well-finished
                spaces tailored to their needs.
              </span>
            </div>

            <div className="title-line">
              <span></span>
            </div>
          </div>

          <div
            className={`hero-actions ${buttonActive ? "hero-button-active" : ""}`}
          >
            <a href="/contact" className="hero-btn">
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
