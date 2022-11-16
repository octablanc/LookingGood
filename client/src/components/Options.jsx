import React, { useState } from "react";
import styled from "styled-components";
import OptionsS from "./styles/Options";

export default function Options(){
    

    return (
        <>
        <OptionsS>
            <span>Options</span>
            <ul className="list">
                <li>Ascendent</li>
                <li>Descending</li>
            </ul>
        </OptionsS>
        <span>hola</span>
        </>
    );
};