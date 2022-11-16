import React from "react";
import LandingS from "./styles/LandingStyle";
import { useHistory } from "react-router-dom";

export default function Landing(){
    let history = useHistory();

    function handleClick() {
        history.push("/home");
    }

    return (
        <LandingS>
            <div className="landing-container">
                <div className="landing-content">
                    <h1>Looking Good</h1>
                    <p>Looking Good is a management system that combines dining out, eating store-bought food, and cooking at home to help you find and organize the restaurants, products, and recipes that fit your diet and can help you reach your nutrition goals.</p>
                    <button onClick={()=> handleClick()}>Let's Cook!</button>
                </div>
            </div>
        </LandingS>
    );
}