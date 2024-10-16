import { useState } from "react";
import "../styles/IngredientsSection.css";

const IngredientsSection = ({  addIngredient }) => {
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
        </section>
    );
};

export default IngredientsSection;
