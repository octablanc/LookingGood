import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/actions/index";
import RecipeCard from "./RecipeCard";
import HomeS from "./styles/HomeStyles";

export default function Home(){
    const recipes = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllRecipes());
    }, [dispatch]);

    // console.log(recipes);

    return (
        <>
            <SearchBar/>
            <HomeS>
                {
                    recipes && recipes.map((recipe)=> (<RecipeCard recipe={recipe}/>))
                }
            </HomeS>
        </>
    );
}