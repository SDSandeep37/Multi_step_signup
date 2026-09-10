import "./card.css";

export const Card = ({ id, icon, title, description }) => {
  return (
    <div
      key={id}
      className="card rounded-[10px] flex flex-col items-center justify-center bg-(--gradient-hero)"
    >
      <div className="card-icon">{icon}</div>
      <h2 className="text-2xl text-center mb-4">{title}</h2>
      <p className="text-[14px] text-center tracking-wider">{description}</p>
    </div>
  );
};
