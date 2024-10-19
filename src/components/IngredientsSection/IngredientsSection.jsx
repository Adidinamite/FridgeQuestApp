import { useState, useRef } from "react";
import "./IngredientsSection.css";

const IngredientsSection = ({ addIngredient }) => {
  const [ingredient, setIngredient] = useState("");
  const ingredientInputRef = useRef(null);

  const handleInputChange = (event) => {
    setIngredient(event.target.value);
    ingredientInputRef.current.setCustomValidity("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ingredient.trim()) {
      ingredientInputRef.current.setCustomValidity(
        "Please enter an ingredient name.",
      );
    } else if (!/^[a-zA-Z]{1,15}$/.test(ingredient)) {
      ingredientInputRef.current.setCustomValidity(
        "Ingredient name must be 1-15 letters long and contain only letters.",
      );
    } else {
      addIngredient(ingredient);
      setIngredient("");
      return;
    }
    ingredientInputRef.current.reportValidity();
  };

  return (
    <section className="ingredientsContainer">
      <h1>Add Your Ingredients:</h1>
      <form
        onSubmit={handleSubmit}
        className="ingredientForm"
        aria-label="Add Ingredient"
      >
        <input
          type="text"
          id="ingredientInput"
          name="ingredient"
          value={ingredient}
          onChange={handleInputChange}
          placeholder="Enter an ingredient"
          aria-label="Ingredient Name"
          maxLength={15}
          required
          ref={ingredientInputRef}
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </section>
  );
};

export default IngredientsSection;
