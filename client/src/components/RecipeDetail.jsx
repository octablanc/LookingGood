import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRecipe, clearRecipe } from "../redux/actions";
import RecipeDetailS from "./styles/RecipeDetailStyles";
import parse from "html-react-parser";
import Step from "./Step";
import Spinner from "./Spinner";

export default function RecipeDetail(){
    const dispatch = useDispatch();
    const recipe = useSelector((state)=> state.recipeDetail);
    const { Id } = useParams();
    
    useEffect(()=> {
        dispatch(getRecipe(Id));

        return function clear(){
            dispatch(clearRecipe());
        }
    }, [dispatch]);

    return (
        <RecipeDetailS key={recipe.Id}>
            {
                recipe.name? 
                <>
                    <div className="recipe-content">
                        <div id="recipe-header">
                            <div>
                                <h1 style={{marginBottom: "40px"}}>{recipe.name}</h1>
                                <h3>Summary</h3>
                                {
                                    parse(recipe.dish_summary+"")
                                }
                            </div>
                            <div id="recipe-picture" style={{ background: `url( ${recipe.image})no-repeat center`}}></div>
                        </div>

                        <h3>Diets</h3>
                        <div id="diets">
                            {
                                recipe.DietTypes && recipe.DietTypes.map((type, index)=> <span key={index+1} style={{paddingLeft: "10px"}}>{type.name}.</span>)
                            }
                        </div>

                        <h3>Health Score</h3>
                        <div className="health_score">
                            <span>This recipe has an <b>HEI</b> score of: </span>
                            <strong>{recipe.health_score}</strong>
                        </div>
                    </div>
                    <div className="recipe-content" id="steps">
                        <h2>Steps</h2>
                        <div>
                                {
                                    recipe.steps && recipe.steps.map((step)=> <Step number={step.number} step={step.step} key={step.number}/>)
                                }
                        </div>
                    </div>
                </> : <Spinner/>
            }
        </RecipeDetailS>
    )
}