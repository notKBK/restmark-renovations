import { useState, useEffect } from "react";
import "./Contact.css";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | RestMark Renovations";
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Could not send message. Please try again.");
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-top">
          <h1 className="contact-tag">CONTACT</h1>

          <div className="contact-heading">
            Let’s build something <span className="gold-text">beautiful.</span>
          </div>

          {/*<div className="contact-subtext">
            Reach out and tell us about your renovation project.
          </div>*/}
        </div>
        <div className="contact-details">
          {/* LEFT */}
          <div className="contact-details-card">
            <div className="contact-details-title">Contact Info</div>

            <a href="tel:1234567890" className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={18} strokeWidth={2.2} />
              </div>

              <div className="contact-detail-text contact-page-phone">
                <span>Phone</span>
                <div className="contact-detail-info ">(289)-962-4359</div>
              </div>
            </a>

            <a
              href="mailto:info@restmarkrenovations.com"
              className="contact-detail-item"
            >
              <div className="contact-detail-icon">
                <Mail size={18} strokeWidth={2.2} />
              </div>

              <div className="contact-detail-text">
                <span>Email</span>
                <div className="contact-detail-info">
                  info@restmarkrenovations.com
                </div>
              </div>
            </a>
          </div>

          {/* RIGHT */}
          <div className="contact-details-card">
            <div className="contact-details-title">Business Hours</div>

            <div className="hours-row">
              <span>Monday – Friday</span>
              <div>7:00 AM – 8:00 PM</div>
            </div>

            <div className="hours-row">
              <span>Saturday</span>
              <div>8:00 AM – 6:00 PM</div>
            </div>

            <div className="hours-row">
              <span>Sunday</span>
              <div>8:00 AM – 4:00 PM</div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="contact-bottom">
            <button type="submit">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <div className="contact-status">{status}</div>}
          </div>
        </form>
      </section>
    </main>
  );
}
