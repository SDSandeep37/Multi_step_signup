import { Card } from "../components/Card/Card";
import { IoLocation } from "react-icons/io5";
import { BiSolidParty } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
const cardDetails = [
  {
    id: 1,
    icon: <IoLocation size={50} className="text-(--color-tertiary)" />,
    title: "Discover Local Parties",
    description: "Easily loacte the hottest party spots around your area.",
  },
  {
    id: 2,
    icon: <BiSolidParty size={50} className="text-(--color-secondary)" />,
    title: "Party All Night",
    description:
      "Enjoy unforgettable night out with epic parties and lively crowds.",
  },
  {
    id: 3,
    icon: <HiBellAlert size={50} className="text-[#ec4899]" />,
    title: "Party All Night",
    description:
      "Enjoy unforgettable night out with epic parties and lively crowds.",
  },
];
const Cards = () => {
  return (
    <div className="mt-10 w-[90%] m-auto text-(--color-text) flex flex-wrap items-center justify-center gap-5">
      {cardDetails &&
        cardDetails.map((card) => (
          <Card
            key={"card_" + card.id}
            id={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
    </div>
  );
};

export default Cards;
