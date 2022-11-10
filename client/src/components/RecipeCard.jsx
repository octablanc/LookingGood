import React from "react";
import RecipeCardS from "./styles/RecipeCardStyle";

export default function RecipeCard({recipe}){
    return (
        <RecipeCardS>
            <div className="picture" style={{background: `url(${recipe.image})no-repeat center`}}></div>
            <div className="name">
                <span>{recipe.name}</span>
            </div>
        </RecipeCardS>
    );
}