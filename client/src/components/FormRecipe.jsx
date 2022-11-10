import React, { useEffect, useState } from "react";
import RecipeFormS from "./styles/FormRecipeStyle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllDietTypes } from '../redux/actions/index';

export default function FormRecipe(){
    const { fields, setFields } = useState({
        name: "",
        dish_summary: "",
        health_score: 0,
    })

    const DietTypes = useSelector((state)=> state.diet_types);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllDietTypes());
    }, []);

    return (
        <RecipeFormS>
            <span>Recipe Name</span>
            <input type="text" name="name"/>

            <span>Dish Summary</span>
            <textarea name="dish_summary" placeholder="Describe the summary..."/>

            <span>Health Score</span>
            <input type="text" name="health_score"/>

            <span>Diet Type</span>
            <div>
                {DietTypes.map((diet_type)=> (
                    <div>
                        <label for={diet_type.name}>{diet_type.name}
                        <input type="checkbox" name={diet_type.name} value={diet_type.id}/>
                        </label>
                    </div>
                ))}
            </div>
            <button type="submit">Create Recipe</button>
        </RecipeFormS>
    )
}