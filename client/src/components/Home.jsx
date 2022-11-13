import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/actions/index";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import MainContentS from "./styles/MainContent";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

export default function Home(){
    const recipes = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllRecipes());
    }, [dispatch]);

    var pagina = useSelector((state)=> state.page);

    var toShow = [];

    for(var i = 12*pagina-12; i<12*pagina; i++){
        if(recipes[i])
            toShow.push(recipes[i]);
    }
    console.log(toShow.length);

    return (
        <>
            <SearchBar/>
            <Pagination/>
                <MainContentS>
                    {
                        toShow.length? toShow.map((recipe)=> (<RecipeCard recipe={recipe} key={recipe.Id}/>)) : <Spinner/>
                    }
                </MainContentS>
            <Pagination/>
        </>
    );
}