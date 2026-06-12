import "./ListContainer.css";
import useReveal from "../hooks/useReveal";
import ListItem from "./ListItem";

function RevealListItem({ number, title, text }) {
  const [itemRef, itemVisible] = useReveal(0.8);

  return (
    <div
      ref={itemRef}
      className={`list-item-reveal ${itemVisible ? "list-item-visible" : ""}`}
    >
      <ListItem number={number} title={title} text={text} />
    </div>
  );
}

export default function ListContainer() {
  const [sectionRef, titleVisible] = useReveal(0.2);
  const items = [
    {
      number: "01",
      title: "Consultation & Planning",
      text: "We begin by discussing your renovation goals, vision, and overall project expectations while answering questions and outlining the best direction for your space.",
    },
    {
      number: "02",
      title: "Assessment & Proposal",
      text: "A walkthrough of your home is completed to understand the renovation goals and scope of work. A written proposal is then provided outlining pricing, materials, and timelines.",
    },
    {
      number: "03",
      title: "Approval & Scheduling",
      text: "Once approved, agreements, scheduling, and project preparation are finalized to ensure a smooth construction process.",
    },
    {
      number: "04",
      title: "Construction & Project Management",
      text: "Your renovation is completed with a focus on craftsmanship & communication, while keeping attention to detail to maintain a clean and organized workspace throughout the project.",
    },
    {
      number: "05",
      title: "Final Walkthrough & Support",
      text: "A final walkthrough is conducted to ensure all finishing details meet expectations and project standards. We stand behind the quality of our work and continue to provide support following project completion.",
    },
  ];

  return (
    <div ref={sectionRef}>
      <div className={titleVisible ? "reveal-active" : ""}>
        <div className="home-subtitle title-line">
          <span>Our Process</span>
        </div>

        <div className="home-title">
          <div className="title-line">
            <span>
              A <span className="gold-text">Refined</span>
            </span>
          </div>

          <div className="title-line">
            <span>Renovation Experience</span>
          </div>
        </div>
      </div>

      <div className="list-container">
        {items.map((item) => (
          <RevealListItem
            key={item.number}
            number={item.number}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
