import { useEffect, useRef } from "react";
import "./WhereMap.css";
import mapUrl from "../assets/WhereMap.svg";
import RevealText from "./RevealText";

export default function WhereMap() {
  const ref = useRef();

  useEffect(() => {
    fetch(mapUrl)
      .then((res) => res.text())
      .then((svg) => {
        // 🔥 FIX: clear previous render
        ref.current.innerHTML = "";

        ref.current.innerHTML = svg;

        const paths = ref.current.querySelectorAll("path");

        const activeRegions = [
          8, 25, 23, 30, 24, 27, 29, 28, 21, 15, 7, 6, 38, 26,
        ];

        paths.forEach((p, i) => {
          p.classList.add("region");

          if (activeRegions.includes(i)) {
            p.classList.add("active");
          }
        });
      });
  }, []);

  return (
    <div className="where-we-work-container">
      <div className="where-we-work">
        <div className="where-we-work-bg-text">
          <section className="reveal-section">
            <RevealText
              lines={["WHERE", "WE", "WORK"]}
              className="where-work-text"
            />
          </section>
        </div>
      </div>
      <div className="legend">
        <div className="legend-item">
          <img src="/icons/circle-white.png"></img>
          <span>Where we operate</span>
        </div>
        <div className="legend-item">
          <img src="/icons/circle-black.png"></img>
          <span>Surrounding Area</span>
        </div>
      </div>
      <div className="map-container">
        <div ref={ref} className="where-map" />

        {/* PIN OVERLAY */}
        <svg className="map-overlay">
          <g className="pin">
            {/* shorter line + moved left + up */}
            <line x1="46%" y1="60%" x2="46%" y2="55%" />

            {/* center dot */}
            <circle className="pin-dot" cx="46%" cy="55%" r="11" />

            {/* rings */}
            <circle className="pin-ring-0" cx="46%" cy="55%" r="13" />
            <circle className="pin-ring" cx="46%" cy="55%" r="14" />
            <circle className="pin-ring-2" cx="46%" cy="55%" r="14" />
            <image
              href="/icons/home.png"
              x="46%"
              y="55%"
              width="24"
              height="24"
              transform="translate(-12, -12)"
            />
          </g>
        </svg>
        <div className="pin-label">
          <p>Where we're based</p>
          <span>Stoney Creek, ON</span>
        </div>
      </div>
    </div>
  );
}
