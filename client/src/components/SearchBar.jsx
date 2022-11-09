import React from "react";
import SearchBarS from "./styles/SearchBarStyle";

export default function SearchBar(){
    return (
        <SearchBarS>
            <input type="text"/>
            <button>Search</button>
        </SearchBarS>
    );
}