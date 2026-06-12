import { useEffect, useRef, useState } from "react";
import "./RevealText.css";

export default function RevealText({
  lines = ["WHERE", "WE", "WORK"],
  className = "",
  threshold = 0.55,
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      {
        threshold,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-text-wrapper ${active ? "active" : ""} ${className}`}
    >
      {lines.map((line, index) => (
        <div className="reveal-line" key={index}>
          <div className="reveal-text-base">{line}</div>
          <div className="reveal-text-fill">{line}</div>
        </div>
      ))}
    </div>
  );
}
