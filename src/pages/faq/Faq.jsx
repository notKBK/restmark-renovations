// FAQ.jsx
import { useState, useEffect } from "react";
import "./Faq.css";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | RestMark Renovations";
  }, []);
  const faqs = [
    {
      question: "What renovation services do you offer?",
      answer:
        "RestMark Renovations specializes in full home renovations, kitchen renovations, bathroom renovations, basement finishing, home additions, flooring, trim work, painting, electrical upgrades, and general residential remodeling services.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve homeowners throughout Hamilton, Burlington, Ancaster, Dundas, Stoney Creek, Waterdown, Binbrook, and surrounding communities.",
    },
    {
      question: "Do you provide free renovation estimates?",
      answer:
        "Yes. We provide in-home consultations and detailed written estimates for residential renovation projects.",
    },
    {
      question: "How long does a renovation project usually take?",
      answer:
        "Project timelines vary depending on the size and complexity of the renovation. Smaller projects may take several days, while larger full-home renovations or additions can take several weeks.",
    },
    {
      question: "Do you handle both design and construction?",
      answer:
        "We work closely with homeowners throughout the planning and construction process to ensure the finished space matches the desired style, layout, and functionality.",
    },
    {
      question: "Are you insured?",
      answer:
        "Yes. We carry appropriate insurance coverage for residential renovation work to help protect homeowners and projects.",
    },
    {
      question: "Do you offer kitchen renovations?",
      answer:
        "Yes. We complete custom kitchen renovations including cabinetry installation, backsplashes, flooring, lighting, painting, trim work, and full kitchen remodeling.",
    },
    {
      question: "What is included in a renovation quote?",
      answer:
        "Our written proposals typically outline the project scope, labour, material allowances, estimated timelines, payment schedule, and any additional project details.",
    },
    {
      question: "Do you renovate bathrooms?",
      answer:
        "Yes. Bathroom renovations can include tile installation, vanities, showers, plumbing fixture replacement, flooring, lighting, and complete bathroom remodels.",
    },
    {
      question: "Can you finish or renovate basements?",
      answer:
        "Absolutely. We provide basement renovations and finishing services including framing, drywall, flooring, lighting, trim, and custom layouts.",
    },
    {
      question: "Do you complete home additions?",
      answer:
        "Yes. We take on select home addition and expansion projects designed to improve functionality and living space.",
    },
    {
      question: "Do you provide electrical work as part of renovations?",
      answer:
        "Yes. Electrical upgrades and installations can be incorporated into renovation projects where required.",
    },
    {
      question: "Do you require a deposit before starting?",
      answer:
        "Yes. A deposit is typically required to secure scheduling, material planning, and project preparation.",
    },
    {
      question: "Will my home stay clean during the renovation?",
      answer:
        "We make every effort to maintain an organized and respectful work environment throughout the renovation process.",
    },
    {
      question: "Do you offer workmanship warranties?",
      answer:
        "Yes. We stand behind the quality of our workmanship and provide warranty coverage on completed renovation work.",
    },
    {
      question: "Can I live in my home during the renovation?",
      answer:
        "In many cases, yes. This depends on the size and scope of the project and will be discussed during planning.",
    },
    {
      question: "How far in advance should I book my renovation?",
      answer:
        "We recommend reaching out as early as possible, especially during busy renovation seasons, to ensure scheduling availability.",
    },
    {
      question: "What types of flooring do you install?",
      answer:
        "We install a variety of flooring materials including vinyl plank, hardwood, laminate, tile, and engineered flooring products.",
    },
    {
      question: "Do you help with material selection?",
      answer:
        "Yes. We can assist homeowners with selecting finishes, fixtures, colours, and materials that suit the style and budget of the project.",
    },
    {
      question: "Why choose RestMark Renovations?",
      answer:
        "We focus on quality craftsmanship, professional communication, attention to detail, and creating clean, functional spaces tailored to each homeowner’s vision.",
    },
    {
      question: "Do you handle permits for renovation projects?",
      answer:
        "Depending on the scope of work, permits may be required for certain renovations. We can help guide homeowners through the permit process and ensure projects are completed according to local requirements where applicable.",
    },
    {
      question: "Can you help modernize older homes?",
      answer:
        "Yes. We regularly work on updating older homes with modern layouts, finishes, lighting, flooring, and functional improvements while maintaining the character of the space where desired.",
    },
    {
      question: "Do you install backsplashes and tile work?",
      answer:
        "Yes. We provide backsplash installation, tile flooring, shower tile installation, and other custom tile work for kitchens, bathrooms, laundry rooms, and feature walls.",
    },
    {
      question: "Do you offer interior painting as part of renovations?",
      answer:
        "Yes. Interior painting services can be included as part of renovation projects to help complete the final look and finish of the space.",
    },
    {
      question: "Can you replace lighting and install pot lights?",
      answer:
        "Yes. Lighting upgrades including pot lights, pendant lighting, under-cabinet lighting, and fixture replacement can be incorporated into renovation projects.",
    },
    {
      question: "Do you complete custom trim and finishing work?",
      answer:
        "Absolutely. Detailed trim work, baseboards, crown moulding, door casing, feature walls, and finishing carpentry are important parts of creating a polished final result.",
    },
    {
      question: "What should homeowners do before a renovation begins?",
      answer:
        "Before construction begins, we recommend removing personal belongings from the work area and discussing project expectations, timelines, material selections, and access arrangements to help ensure a smooth renovation process.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-title">Frequently Asked Questions</h1>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>

                <FaChevronDown className="faq-arrow" />
              </button>

              <div className="faq-answer-wrapper">
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
