import React from "react";
import ErrorS from "./styles/ErrorStyle";

export default function Error({message}){

    return (
        <ErrorS>
            <span className="warning">!</span>
            <div className="message">
                <span>{message}</span>
            </div>
        </ErrorS>
    );
}