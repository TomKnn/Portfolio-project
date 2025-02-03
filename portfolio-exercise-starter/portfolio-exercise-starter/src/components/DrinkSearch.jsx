import { useState } from "react";
import { availableDrinks } from "../utils/data";
import DrinkList from "./DrinkList";
import { TextInput } from "./ui/TextInput"; // Importeer TextInput

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState(""); // Gebruik een state voor de zoekterm

  const handleSearchChange = (event) => {
    setSearchField(event.target.value); // Update de zoekterm
  };

  // Filter de beschikbare drankjes op basis van de zoekterm
  const filteredDrinks = availableDrinks.filter((drink) =>
    drink.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput value={searchField} onChange={handleSearchChange} />{" "}
      {/* Voeg TextInput toe */}
      <DrinkList drinks={filteredDrinks} />{" "}
      {/* Geef de gefilterde lijst door aan DrinkList */}
    </>
  );
};

export default DrinkSearch;
