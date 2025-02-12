import { useState } from "react";
import { PortfolioItemPage } from "./pages/PortfolioItemPage";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div>
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <PortfolioPage clickFn={setSelectedItem} />
      )}
    </div>
  );
};
//cd "C:\Visual Studio\Portfolio Project\portfolio-exercise-starter\portfolio-exercise-starter"
