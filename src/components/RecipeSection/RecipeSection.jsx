import { useState } from "react";
import "./RecipeSection.css";

const RecipeSection = ({ ingredientsList, deleteIngredient }) => {
  const [recipe, setRecipe] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const currentIngredients = () => (
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
      <button
        className={"generateButton"}
        onClick={generateRecipe}
        disabled={isLoading}
      >
        {isLoading ? "Generating Recipe..." : "Generate Recipe"}
        {isLoading && <span className="loading"></span>}
      </button>
    </>
  );

  const generateRecipe = async () => {
    setIsLoading(true);
    setError(null);
    const ingredientsListAsString = ingredientsList.join(", ");
    try {
      const response = await fetch("http://localhost:3000/api/get-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputText: ingredientsListAsString }),
      });
      const data = await response.json();
      setRecipe(data?.choices[0]?.message?.content);
    } catch (error) {
      console.error(
        "Error while fetching response from OpenAI:",
        error.message,
      );
      setError(
        "An error occurred while processing your request. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const parseRecipeSteps = (recipeString) => {
    return recipeString
      .split(/\d+\.\s+/)
      .map((step) => step.trim())
      .filter((step) => step.length > 0);
  };

  return (
    <section className="recipeContainer">
      <h2>Recipe</h2>
      {!!ingredientsList.length ? (
        currentIngredients()
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
          <h2>Generated Recipe:</h2>
          <ol>
            {parseRecipeSteps(recipe).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};

export default RecipeSection;
