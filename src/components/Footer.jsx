import "./Footer.css";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT */}
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="Restmark Renovations"
            className="footer-logo"
          />

          <div className="footer-contact">
            <a href="tel:1234567890" className="footer-contact-item">
              <FaPhoneAlt />
              <span>(289)-962-4359</span>
            </a>

            <a
              href="mailto:info@restmarkrenovations.com"
              className="footer-contact-item"
            >
              <MdEmail />
              <span>info@restmarkrenovations.com</span>
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-pages">
          <div className="footer-heading">Pages</div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-social-wrap">
          <div className="footer-heading">Socials</div>

          <div className="footer-socials">
            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaTiktok />
            </a>

            <a href="/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Restmark Renovations. All rights reserved.
      </div>
    </footer>
  );
}
