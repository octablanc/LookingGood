import React from "react";
import StepS from "./styles/StepStyle";

export default function Step({ number, step }){
    return (
        <StepS>
            <div id="number">
                <span>{number}</span>
            </div>
            <div>
                <span>{step}</span>
            </div>
        </StepS>
    );
}