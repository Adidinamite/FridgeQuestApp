import Navbar from "../components/Navbar.jsx";
import IngredientsSection from "../components/IngredientsSection.jsx";
import RecipeSection from "../components/RecipeSection.jsx";
import { useState } from "react";
const RecipePage = () => {
    const [ingredientsList, setIngredientsList] = useState([]);
    const addIngredient = (ingredient) => {
        setIngredientsList([...ingredientsList, ingredient]);
    };
    const deleteIngredient = (index) => {
        setIngredientsList(ingredientsList.filter((_, i) => i !== index));
    };
    return(
        <>
            <Navbar/>
            <IngredientsSection
                ingredientsList={ingredientsList}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
            />
            <RecipeSection ingredientsList={ingredientsList} />
        </>
    );
};
export default RecipePage;