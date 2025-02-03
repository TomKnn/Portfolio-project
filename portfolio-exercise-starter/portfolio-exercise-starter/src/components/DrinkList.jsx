import { DrinkItem } from "./DrinkItem";
import "./DrinkList.css"; // Voeg dit toe bovenaan in DrinkList.jsx

export const DrinkList = ({ drinks }) => {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} />
      ))}
    </>
  );
};

export default DrinkList;
