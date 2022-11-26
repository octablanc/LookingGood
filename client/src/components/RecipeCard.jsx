import React from "react";
import RecipeCardS from "./styles/RecipeCardStyle";
import { useHistory } from "react-router-dom";

export default function RecipeCard({recipe}){
    let history = useHistory();

    function handleClick() {
        history.push(`/recipe/${recipe.Id}`);
    }

    return (
        <RecipeCardS onClick={()=> handleClick()}>
            <div className="picture" style={{backgroundPosition: "center", backgroundImage: `url(${recipe.image})`}}></div>
            <div className="name">
                <span>{recipe.name}</span>
            </div>
        </RecipeCardS>
    );
}