import { useState } from "react";
import "../styles/IngredientsSection.css";

const IngredientsSection = ({ ingredientsList, addIngredient, deleteIngredient }) => {
    const [ingredient, setIngredient] = useState("");


    const handleInputChange = (event) => {
        setIngredient(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (ingredient.trim()) {
            addIngredient(ingredient);
            setIngredient("");
        }
    };
    const renderIngredient = (item, index) => (
        <li key={index} className="ingredientItem">
            {item}
            <button
                onClick={() => deleteIngredient(index)}
                className="deleteButton"
                aria-label={`Delete ${item}`}
            >
                ✕
            </button>
        </li>
    );

    return (
        <section className="ingredientsContainer">
            <h1>Add Your Ingredients:</h1>
            <form onSubmit={handleSubmit} className="ingredientForm" aria-label="Add Ingredient">
                <input
                    type="text"
                    id="ingredientInput"
                    name="ingredient"
                    value={ingredient}
                    onChange={handleInputChange}
                    placeholder="Enter an ingredient"
                    aria-label="Ingredient Name"
                    required
                />
                <button type="submit">Add Ingredient</button>
            </form>
            {ingredientsList.length > 0 && (
                <ul className="ingredientsList" aria-live="polite">
                    {ingredientsList.map(renderIngredient)}
                </ul>
            )}
        </section>
    );
};

export default IngredientsSection;
