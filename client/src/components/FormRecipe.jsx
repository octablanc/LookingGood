import React from "react";
import RecipeFormS from "./styles/FormRecipeStyle.jsx";

export default function FormRecipe(){

    return (
        <RecipeFormS>
            <span>Recipe Name</span>
            <input type="text" name="name"/>

            <span>Dish Summary</span>
            <textarea name="dish_summary" placeholder="Describe the summary..."/>

            <span>Health Score</span>
            <input type="text" name="health_score"/>

            <button type="submit">Create Recipe</button>
        </RecipeFormS>
    )
}