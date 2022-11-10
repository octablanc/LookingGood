import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/actions/index";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import MainContentS from "./styles/MainContent";
import RecipeCard from "./RecipeCard";

export default function Home(){
    const recipes = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!recipes.length)
            dispatch(getAllRecipes());
    }, [dispatch]);

    // console.log(recipes);

    var pagina = useSelector((state)=> state.page);

    var toShow = [];

    for(var i = 12*pagina-12; i<12*pagina; i++){
        if(recipes[i])
            toShow.push(recipes[i]);
    }

    return (
        <>
            <SearchBar/>
            <Pagination/>
                <MainContentS>
                    {
                        toShow.length? toShow.map((recipe)=> (<RecipeCard recipe={recipe}/>)) : "No hay un carajo"
                    }
                </MainContentS>
            <Pagination/>
        </>
    );
}