import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OptionsS from "./styles/OptionsStyle";
import { useSelector, useDispatch } from "react-redux";
import { changeOptions, clearRecipes, getAllRecipes, getAllDietTypes } from "../redux/actions";

export default function Options(){
    const [ options, setOptions ] = useState(useSelector((state)=> state.options));
    const [ previousElement, setPreviousElement ] = useState({});
    const diet_types = useSelector((state)=> state.diet_types);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllDietTypes());
    }, [dispatch]);

    function handlerOrder(options){
        dispatch(changeOptions(options));
        setOptions(options);
    }

    function handlerFilter(element){
        if(previousElement.id != undefined && previousElement.id != element.id)
            previousElement.className = "";

        setPreviousElement(element);

        if(!element.className)
            element.className = "active";
        else
            element.className = "";

        
        dispatch(changeOptions({
            ...options,
            diet: element.className && element.id
        }));

        setOptions({
            ...options,
            diet: element.className && element.id
        });
    }

    console.log(options);

    return (
        <OptionsS>
            <span>Order</span>
            <ul className="list">
                <hr />
                <li 
                    className={ options.ascendant? "active":"" } 
                    onClick={()=> handlerOrder({
                        ...options,
                        ascendant: !options.ascendant,
                        descending: options.descending && false
                    })}
                >Ascendent</li>
                <li
                    className={ options.descending? "active":"" } 
                    onClick={()=> handlerOrder({
                        ...options,
                        ascendant:  options.ascendant && false,
                        descending: !options.descending
                    })}
                >Descending</li>
                <p>Diets</p>
                <div id="diets">
                    {
                        diet_types && diet_types.map((diet)=> <li key={diet.Id} id={diet.name} onClick={({target})=> handlerFilter(target)}>{diet.name.charAt(0).toUpperCase() + diet.name.slice(1)}</li>)
                    }
                </div>
            </ul>
        </OptionsS>
    );
};