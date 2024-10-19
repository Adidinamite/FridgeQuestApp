import Navbar from "../components/Navbar/Navbar.jsx";
import { IngredientsSection, RecipeSection} from "../components";
import { useState } from "react";
const RecipePage = () => {
    const [ingredientsList, setIngredientsList] = useState([]);
    return (
      <>
        <Navbar />
        <IngredientsSection
          addIngredient={(ingredient) =>
            setIngredientsList([...ingredientsList, ingredient])
          }
        />
        <RecipeSection
          ingredientsList={ingredientsList}
          deleteIngredient={(index) =>
            setIngredientsList(ingredientsList.filter((_, i) => i !== index))
          }
        />
      </>
    );
};
export default RecipePage;