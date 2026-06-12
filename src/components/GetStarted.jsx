import "./GetStarted.css";

export default function GetStarted() {
  return (
    <section className="get-started">
      <div className="get-started-inner">
        <span className="gs-label">Get Started</span>

        <span className="gs-title">Planning a renovation?</span>

        <span className="gs-subtitle">Lets talk about your project.</span>

        <span className="gs-note">Reach out for free estimate!</span>

        <div className="gs-buttons">
          <a href="tel:1234567890" className="gs-btn">
            Call (123) 456-7890
          </a>

          <a href="mailto:your@email.com" className="gs-btn">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
