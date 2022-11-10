import React, { useState } from "react";
import SearchBarS from "./styles/SearchBarStyle";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../redux/actions/index";

export default function SearchBar(){
    const [ inputValue, setInputValue ] = useState("");
    const dispatch = useDispatch();

    function handlerChange(event){
        setInputValue(event.target.value);
    }

    return (
        <SearchBarS>
            <input type="text" key="input-search" value={inputValue} onChange={(event)=> handlerChange(event)}/>
            <button onClick={()=> dispatch(getAllRecipes(inputValue))}>Search</button>
        </SearchBarS>
    );
}