import "../styles/RecipeSection.css";

const RecipeSection = ({ ingredientsList }) => {
    return (
        <section className="recipeContainer">
            <h2>Recipe</h2>
            {ingredientsList.length > 0 ? (
                <>
                    <p>Recipe based on the following ingredients:</p>
                    <ul>
                        {ingredientsList.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No ingredients added yet. Add some to generate a recipe!</p>
            )}
            <button>
                Generate Recipe
            </button>
        </section>
    );
};

export default RecipeSection;
