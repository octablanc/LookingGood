import React, { useState } from "react";
import NavBarS from "./styles/NavBarStyle";
import PopUp from "./PopUp";

export default function NavBar(){
    const [ active, setActive ] = useState(false);

    function activePopUp(){
        setActive(true);
    }

    function deactivePopUp(){
        setActive(false);
    }

    return (
        <NavBarS>
            <span id="icon">Looking Good</span>
            {
                active? <PopUp deactive={deactivePopUp}/> : <></>
            }
            <span id="create-btn" onClick={()=> activePopUp()}>Create Recipe</span>
        </NavBarS>
    );
}