import { useState } from "react";
import { availableDrinks } from "./utils/data"; // Importeer availableDrinks in plaats van portfolioItems
import DrinkChoice from "./components/DrinkChoice";
import DrinkSearch from "./components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState(null);

  const greeting = "Welcome to our cafe!";

  return (
    <div className="app">
      <div className="content-container">
        {" "}
        {/* Een extra div voor uitlijning */}
        {userDrink ? (
          <DrinkChoice drink={userDrink} />
        ) : (
          <>
            <h1>{greeting}</h1>
            <DrinkSearch
              drinks={availableDrinks}
              onSelectDrink={setUserDrink}
            />
          </>
        )}
      </div>
    </div>
  );
};
