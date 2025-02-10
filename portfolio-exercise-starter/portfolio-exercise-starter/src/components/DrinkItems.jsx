import DrinkItem from "./DrinkItem";

const DrinkItems = ({ drinks, onClick }) => {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} onClick={onClick} />
      ))}
    </>
  );
};

export default DrinkItems;
