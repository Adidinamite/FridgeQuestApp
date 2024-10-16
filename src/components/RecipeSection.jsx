import { useState } from "react";
import "../styles/RecipeSection.css";
import MakeAPICall from "./MakeAPICall.jsx";

const RecipeSection = ({ ingredientsList, deleteIngredient }) => {
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const generateRecipe = async () => {
        setIsLoading(true);
        setError(null);
        const ingredientsListAsString = ingredientsList.join(", ");

        try {
            const response = await MakeAPICall(ingredientsListAsString);
            setRecipe(response);
        } catch (error) {
            console.error("Error generating recipe:", error);
            setError("Sorry, an error occurred while generating the recipe.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="recipeContainer">
            <h2>Recipe</h2>
            {ingredientsList.length > 0 ? (
                <>
                    <p>Recipe based on the following ingredients:</p>
                    <ul>
                        {ingredientsList.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient}

                                <button
                                    onClick={() => deleteIngredient(index)}
                                    className={"deleteButton"}
                                    aria-label={`Delete ${ingredient}`}
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className={"generateButton"} onClick={generateRecipe} disabled={isLoading}>
                        {isLoading ? "Generating Recipe..." : "Generate Recipe"}
                        {isLoading && <span className="loading"></span>}
                    </button>
                </>
            ) : (
                <p>No ingredients added yet. Add some to generate a recipe!</p>
            )}
            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
            {recipe && !error && (
                <div className="generatedRecipe">
                    <h3>Generated Recipe:</h3>
                    <p>{recipe}</p>
                </div>
            )}
        </section>
    );
};

export default RecipeSection;
