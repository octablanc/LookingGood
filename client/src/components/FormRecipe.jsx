import React, { useEffect } from "react";
import RecipeFormS from "./styles/FormRecipeStyle.jsx";

export default function FormRecipe(){
    var DietTypes = [];

    useEffect(()=>{
        console.log("Hola");
    }, []);

    return (
        <RecipeFormS>
            <span>Recipe Name</span>
            <input type="text" name="name"/>

            <span>Dish Summary</span>
            <textarea name="dish_summary" placeholder="Describe the summary..."/>

            <span>Health Score</span>
            <input type="text" name="health_score"/>

            <select name="cars" id="cars">
                {DietTypes.map((diet_type)=> <option value={diet_type.Id}>{diet_type.name}</option>)}
            </select>

            <button type="submit">Create Recipe</button>
        </RecipeFormS>
    )
}