// Services.jsx

import "./Services.css";
import useReveal from "../../hooks/useReveal";
import { useEffect } from "react";

const services = [
  {
    key: 1,
    title: "Full Home Renovations",
    image: "/fullhome.jpg",
    description: `Full home renovations are ideal for homeowners looking to completely refresh, modernize, or rework their living space. Whether the goal is improving flow, updating outdated finishes, or creating a more functional layout, we approach each renovation with a focus on quality, comfort, and long-term value.

Every part of the home is considered carefully, from flooring and trim to kitchens, bathrooms, lighting, and overall layout. Our goal is to create a space that feels cohesive instead of pieced together, with finishes and details that work naturally throughout the entire home.

From the first walkthrough to the final details, we manage the renovation with clear communication, organization, and attention to craftsmanship. The result is a home that feels refreshed, refined, and better suited to the way you live.`,
  },
  {
    key: 2,
    title: "Kitchen Renovations",
    image: "/kitchen.jpg",
    description: `Kitchen renovations can completely change how a home feels and functions. Whether you want a brighter layout, more storage, upgraded finishes, or a better space for cooking and gathering, we help bring the design together with care and precision. We focus on important details like cabinetry, countertops, lighting, flooring, backsplashes, and layout improvements. The goal is to create a kitchen that feels both beautiful and practical, with a layout that supports everyday use.

A strong kitchen renovation should feel timeless, functional, and connected to the rest of the home. We build kitchens that improve daily living while adding lasting value and style to your space.`,
  },
  {
    key: 3,
    title: "Bathroom Renovations",
    image: "/bathroom.jpg",
    description: `Bathroom renovations are about creating a space that feels clean, comfortable, and professionally completed. Whether it’s a small bathroom update or a full renovation, we focus on improving both the look and function of the space.

We pay close attention to details like tile work, vanities, fixtures, lighting, waterproofing, and finishing touches. These elements all work together to create a bathroom that feels polished, practical, and built to last.

A well-renovated bathroom should feel easy to use every day while still adding style and value to your home. We help create bathrooms that feel modern, organized, and thoughtfully designed from start to finish.`,
  },
  {
    key: 4,
    title: "Basement Finishing",
    image: "/basement.jpg",
    description: `Basement finishing is a great way to turn unused or unfinished space into a comfortable part of the home. Whether you want a family room, entertainment area, office, guest space, or bar area, we help make the basement feel complete and usable. We focus on creating a finished space that feels warm, clean, and connected to the rest of the house. Flooring, lighting, walls, trim, layout, and finishing details all play a major role in making the basement feel comfortable instead of unfinished.

A well-finished basement adds valuable living space and gives your home more flexibility. We create basement spaces that are practical, inviting, and built around how you plan to use them.`,
  },
  {
    key: 5,
    title: "Home Additions",
    image: "/outdoor.jpg",
    description: `Home additions are designed to give your family more space without needing to move. Whether you need an extra room, larger living area, expanded kitchen, sunroom, or additional functional space, we help create an addition that fits your home and lifestyle.

A successful addition should feel like it belongs to the original home, not like an afterthought. We focus on layout, structure, exterior flow, interior finishes, and design details to make the new space blend naturally with the existing home.

From planning through construction, we work to make the addition organized, functional, and built with care. The result is extra space that improves comfort, supports your needs, and adds long-term value to your property.`,
  },
];

function ServiceSection({ service, reverse }) {
  useEffect(() => {
    document.title = "Services | RestMark Renovations";
  }, []);
  const [sectionRef, visible] = useReveal(0.2);

  return (
    <section
      ref={sectionRef}
      className={`service-section ${
        reverse ? "service-section-reverse" : ""
      } ${visible ? "service-visible" : ""}`}
    >
      {/* IMAGE */}
      <div className="service-image-side">
        <div className="service-image-sticky">
          <img src={service.image} alt={service.title} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="service-content-side">
        <div className="service-number gold-text">0{service.key}</div>

        <h2 className="service-title">{service.title}</h2>

        <div className="service-divider" />

        <p className="service-description">{service.description}</p>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero">
        <h1 className="services-hero-title">Our Services</h1>
      </section>

      {/* SERVICES */}
      <section className="services-list">
        {services
          .sort((a, b) => a.key - b.key)
          .map((service, index) => (
            <ServiceSection
              key={service.key}
              service={service}
              reverse={index % 2 !== 0}
            />
          ))}
      </section>
    </main>
  );
}
