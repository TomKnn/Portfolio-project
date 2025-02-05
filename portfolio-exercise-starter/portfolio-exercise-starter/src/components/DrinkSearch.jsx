import { useState } from "react";
import DrinkList from "./DrinkList";
import { TextInput } from "./ui/TextInput"; // Importeer TextInput

export const DrinkSearch = ({ drinks, clickFn }) => {
  const [searchField, setSearchField] = useState(""); // ✅ Initialiseert met een lege string

  // ✅ Event handler die de zoekterm bijwerkt
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // ✅ Filteren van de beschikbare drankjes op basis van de zoekterm
  const matchedDrinks = drinks.filter((drink) =>
    drink.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput changeFn={handleChange} />
      <DrinkList drinks={matchedDrinks} clickFn={clickFn} />{" "}
      {/* ✅ Gebruik matchedDrinks hier */}
    </>
  );
};

export default DrinkSearch;
