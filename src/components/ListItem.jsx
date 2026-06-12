import "./ListItem.css";

export default function ListItem({ number, title, text }) {
  return (
    <div className="list-item-container">
      <div className="list-left">
        <div className="list-number gold-text">{number}</div>
        <div className="list-title">{title}</div>
      </div>
      <div className="list-right">
        <div className="list-text">{text}</div>
      </div>
    </div>
  );
}
