import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className={`navbar ${scrolled ? "navbar-shrink" : ""}`}>
        <div className="nav-inner">
          <img src="/logo.png" alt="logo" className="nav-logo" />

          <div className="nav-right">
            <div className="nav-links">
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            <div className="nav-call">
              <div className="nav-call-icon">
                <FaPhone />
              </div>

              <a href="tel:1234567890" className="nav-call-text">
                <span className="call-label">Call us at</span>
                <span className="call-number">(289)-962-4359</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav
        className={`mobile-navbar ${scrolled ? "mobile-navbar-shrink" : ""}`}
      >
        <img src="/logo.png" alt="logo" className="mobile-logo" />
        <button
          className={`mobile-menu-btn ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-links">
          <NavLink to="/" end onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMobileMenu}>
            Services
          </NavLink>
          <NavLink to="/faq" onClick={closeMobileMenu}>
            FAQ
          </NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu}>
            Contact
          </NavLink>
        </div>

        <div className="mobile-menu-contact">
          <div className="mobile-contact-row">
            <FaPhone />
            <span>(289)-962-4359</span>
          </div>

          <div className="mobile-contact-row">
            <FaEnvelope />
            <span>info@restmarkrenovations.com</span>
          </div>
        </div>
      </div>
    </>
  );
}
