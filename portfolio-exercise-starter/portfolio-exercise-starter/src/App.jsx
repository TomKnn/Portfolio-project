import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { availableDrinks } from "./utils/data";

export const App = () => {
  const [userDrink, setUserDrink] = useState(null);

  const greeting = "Welcome to our cafe!";

  return (
    <div className="App">
      {userDrink ? (
        <>
          <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
          <button onClick={() => setUserDrink(null)}>Reset keuze</button>{" "}
          {/* Resetknop toegevoegd */}
        </>
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch drinks={availableDrinks} clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};

export default App;

//cd "C:\Visual Studio\Portfolio Project\portfolio-exercise-starter\portfolio-exercise-starter"
