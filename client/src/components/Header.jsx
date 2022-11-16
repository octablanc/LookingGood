import React from "react";
import { useHistory } from "react-router-dom";
import HeaderS from "./styles/HeaderStyle";
import { useDispatch, useSelector } from "react-redux";
import { clearRecipes, changePage, getAllRecipes } from "../redux/actions";

export default function H() {
    let history = useHistory();
    const page = useSelector((state)=> state.page);
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(changePage(1));
        dispatch(clearRecipes());
        dispatch(getAllRecipes());
        history.push("/home");
    }

    return (
        <header>
            <HeaderS>
                <span id="recipesPage">Recipes Page</span>
                <hr></hr>
                <span id="title" onClick={()=> handleClick()}>Looking Good</span>
            </HeaderS>
        </header>
    )
}