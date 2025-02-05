import { Button } from "./ui/Button";

export const DrinkChoice = ({ drink, onClick }) => {
  return (
    <>
      <h2>Your choice: {drink.name}</h2>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>Your drink will be ready in a few minutes</p>
      <Button text={"Change selection"} onClick={() => onClick()} />
    </>
  );
};
