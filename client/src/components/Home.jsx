import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../redux/actions/index";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import MainContentS from "./styles/MainContent";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";
import Options from "./Options";

export default function Home() {
    const dispatch = useDispatch();
    var recipes = useSelector((state) => state.recipes);
    const options = useSelector((state) => state.options);
    var pagina = useSelector((state) => state.page);
    var toShow = [];

    useEffect(() => {
        // if(!recipes.length)
            dispatch(getAllRecipes());
    }, [dispatch]);

    if(options.diet)
        recipes = recipes.filter((recipe)=> recipe.DietTypes.reduce(
            (result, value) => {
                if(value.includes(options.diet))
                    result = true;
                return result;
            }, false)
        );

    if(options.ascendant)
        recipes = recipes.sort((a, b) => a.name > b.name? 1: -1);
    else if(options.descending)
        recipes = recipes.sort((a, b) => a.name < b.name? 1: -1);

    for (var i = 12 * pagina - 12; i < 12 * pagina; i++) {
        if (recipes[i])
            toShow.push(recipes[i]);
    }

    return (
        <>  
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                {/* <Options/> */}
                <SearchBar/>
            </div>
            <Pagination />
            <MainContentS>
                {
                    toShow.length ? toShow.map((recipe) => (<RecipeCard recipe={recipe} key={recipe.Id} />)) : <Spinner />
                }
            </MainContentS>
            <Pagination />
        </>
    );
}