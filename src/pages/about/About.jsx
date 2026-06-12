// About.jsx
import "./About.css";
import RevealText from "../../components/RevealText";
import { FaHammer, FaHouse, FaUsers } from "react-icons/fa6";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | RestMark Renovations";
  }, []);
  return (
    <section className="about-page">
      {/* TOP SECTION */}
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <div className="about-title">
            <RevealText
              lines={["About", "Us"]}
              className="about-reveal-title about-title-line"
              threshold={0.35}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-subtitle">
            Renovations Built on Trust, Detail & Lasting Value
          </div>

          <p className="about-text">
            At RestMark Renovations, we believe your home should reflect your
            lifestyle, your taste, and your vision. That’s why we provide
            full-service residential renovations built on quality workmanship,
            attention to detail, and honest communication. Based in Ontario, we
            handle everything from small upgrades to complete home
            transformations. Whether it’s a modern kitchen remodel, a custom
            bathroom renovation, a finished basement, or a full interior
            overhaul, every project is completed with care and precision by our
            dedicated team.
          </p>

          <p className="about-text">
            We take pride in being hands-on from start to finish. From planning
            and design to the final trim detail, we manage every step to ensure
            the work is completed professionally and to a high standard. Our
            goal is simple: deliver clean, polished results that add lasting
            value to your home. RestMark Renovations was built on a passion for
            detail-oriented work, reliable service, and creating spaces
            homeowners can truly enjoy. We believe successful renovations come
            from thoughtful planning, clear communication, and a commitment to
            doing things properly the first time.
          </p>
        </div>
      </div>

      <div className="about-photo-section">
        <div className="our-promise-section">
          <div className="our-promise-triangle"></div>
          <div className="our-promise-container">
            <div className="our-promise">
              <div className="our-promise-left">
                <h2 className="gold-text">OUR PROMISE</h2>
                <span>
                  Your renovation will be handled with honesty, clarity, and
                  care.
                </span>
              </div>
              <div className="our-promise-right">
                <div className="our-promise-line"></div>
                <span>
                  Our work is built on open communication, fair value, and
                  straightforward guidance from the start. We keep the process
                  simple, transparent, and easy to understand, with no hidden
                  surprises or unnecessary complexity. From the first
                  conversation to the final walkthrough, we focus on careful
                  work and doing the job properly.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM SECTION */}
      <div className="about-values">
        <div className="about-values-header">WHY HOMEOWNERS CHOOSE US</div>

        <div className="about-values-grid">
          <div className="about-value-card">
            <div className="about-value-icon">
              <FaHammer />
            </div>

            <div className="about-value-title">Quality Workmanship</div>

            <div className="about-value-text">
              Every renovation is completed with precision, attention to detail,
              and materials built to last.
            </div>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaUsers />
            </div>

            <div className="about-value-title">Transparent Communication</div>

            <div className="about-value-text">
              We keep clients informed throughout the entire renovation process
              with honest timelines and clear expectations.
            </div>
          </div>

          <div className="about-value-card">
            <div className="about-value-icon">
              <FaHouse />
            </div>

            <div className="about-value-title">Designed Around Your Home</div>

            <div className="about-value-text">
              Every project is tailored to match your lifestyle, space, and
              long-term vision for your home.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
