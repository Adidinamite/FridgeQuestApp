import { useState } from "react";
import "../styles/IngredientsSection.css";

const IngredientsSection = () => {
    const [ingredient, setIngredient] = useState("");
    const [ingredientsList, setIngredientsList] = useState([]);

    const handleInputChange = (event) => {
        setIngredient(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (ingredient.trim()) {
            setIngredientsList([...ingredientsList, ingredient]);
            setIngredient("");
        }
    };

    const handleDelete = (ingredientIndex) => {
        const updatedIngredients = [];
        for (let i = 0; i < ingredientsList.length; i++) {
            if (i !== ingredientIndex) {
                updatedIngredients.push(ingredientsList[i]);
            }
        }
        setIngredientsList(updatedIngredients);
    };
    const renderIngredient = (item, index) => (
        <li key={index} className="ingredientItem">
            {item}
            <button onClick={() => handleDelete(index)} className="deleteButton" aria-label={`Delete ${item}`}>
                ✕
            </button>
        </li>
    );
    return (
        <section className="ingredientsContainer">
            <h1>Add your ingredients:</h1>
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
