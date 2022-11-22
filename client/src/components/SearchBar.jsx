import React, { useState } from "react";
import SearchBarS from "./styles/SearchBarStyle";
import { useDispatch } from "react-redux";
import { getAllRecipes, clearRecipes, changePage } from "../redux/actions/index";
import { useHistory } from "react-router-dom";

export default function SearchBar(){
    const [ inputValue, setInputValue ] = useState("");
    const dispatch = useDispatch();
    let history = useHistory();

    function handlerChange(event){
        setInputValue(event.target.value);
    }

    return (
        <SearchBarS>
            <input type="text" key="input-search" value={inputValue} onChange={(event)=> handlerChange(event)}/>
            <button onClick={()=> {
                setInputValue("");
                dispatch(clearRecipes());
                dispatch(changePage(1));
                dispatch(getAllRecipes(inputValue));
                history.push("/home");
            }}>Search</button>
        </SearchBarS>
    );
}