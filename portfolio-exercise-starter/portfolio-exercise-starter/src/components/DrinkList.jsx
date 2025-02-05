import DrinkItem from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <div className="drink-list">
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </div>
  );
};

export default DrinkList;
