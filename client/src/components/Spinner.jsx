import React from "react";
import SpinnerS from "./styles/SpinnerStyle";

export default function Spinner(){
    return (
        <SpinnerS>
            <div class="lds-dual-ring"></div>
        </SpinnerS>
    );
}