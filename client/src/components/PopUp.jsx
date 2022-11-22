import React, { useState, useEffect } from "react";
import PopUpS from "./styles/PopUpStyle";
import { useSelector, useDispatch } from "react-redux";
import { getAllDietTypes } from "../redux/actions/index";
import Step from "./Step";

export default function PopUp({ deactive }){
    const dispatch = useDispatch();
    const diet_types = useSelector((state)=> state.diet_types);
    const [ recipe, setRecipe ] = useState({
        name: "",
        image: "",
        health_score: -1,
        dish_summary: "",
        diet_types: [],
        steps: []
    });
    const [ step, setStep ] = useState({
        number: 1,
        step: ""
    });

    useEffect(()=> {
        document.querySelector('body').style.overflowY = "hidden";

        if(!diet_types.length)
            dispatch(getAllDietTypes());

        return ()=> {
            document.querySelector('body').style.overflowY = "scroll";
        }
    }, []);

    function handlerChange(element){
        setRecipe({
            ...recipe,
            [element.name] : element.value 
        });
    }

    // Crear componente error, con un ( ! ) al hacerlse hover mostrar un error con el nombre que viene por prop
    function validateHealthScore(){
        var number = parseInt(recipe.health_score);
        if(Number.isInteger(number)){
            if(number <= 100 && number >= 1)
                return true;
            else
                return false;
        }
        else
            return false;
    }

    function addDiet(element){
        if(element.className === "diet"){
            const newDietTypes = [...recipe.diet_types, element.id];
            element.className = "active diet";
            setRecipe({
                ...recipe,
                diet_types: newDietTypes
            });
        }
        else{
            element.className = "diet";
            const newDietTypes = recipe.diet_types.filter((id)=> id != element.id);
            setRecipe({
                ...recipe,
                diet_types: newDietTypes
            });
        }
    }

    function addStep(){
        recipe.steps.push(step);
        const newSteps = recipe.steps;
        setRecipe({
            ...recipe,
            steps: newSteps
        });

        setStep({
            number: step.number+1,
            step: ""
        })
    }

    console.log(recipe);

    return (
        <PopUpS>
            <span className="btn-close" onClick={()=> deactive()}>x</span>

            <div className="form-conteiner">
                <h1>Create your own recipe</h1>
                <div className="form">
                    <div className="form-main-content">
                        <div className="main-inputs">
                            <div className="field">
                                <span className="title">Image URL</span>
                                <input onChange={({target}) => handlerChange(target)} placeholder="URL here" name="image" autoComplete="off"/>
                            </div>

                            <div className="field">
                                <span className="title no-first">Name</span>
                                <input onChange={({target}) => handlerChange(target)} placeholder="Name here" name="name" autoComplete="off"/>
                            </div>

                            <div className="field">
                                <span className="title no-first">Health Score</span>
                                <input onChange={({target}) => handlerChange(target)} placeholder="Halth Score here" name="health_score" autoComplete="off"/>
                            </div>
                        </div>

                        <div className="image" style={{backgroundPosition: "center", backgroundImage: `url(${recipe.image})`}}></div>
                    </div>

                    <div className="second-content">
                        <div className="dish-summary">
                            <span className="title" style={{marginBottom: "5px"}}>Dish Summary</span>
                            <textarea onChange={({target}) => handlerChange(target)} className=".boxsizingBorder" placeholder="Dish Summuary here.." name="dish_summary"/>
                        </div>

                        <div className="diet-type-conteiner">
                            <span className="title" style={{marginBottom: "5px"}}>Diets</span>
                            <div className="diet-type">
                                {
                                    diet_types && diet_types.map((diet)=> <span className="diet" id={diet.Id} onClick={({target})=> addDiet(target)}>{diet.name.charAt(0).toUpperCase() + diet.name.slice(1)}</span>)
                                }
                                <span className="diet" id={1} onClick={({target})=> addDiet(target)}>prueba</span>
                            </div>
                        </div>
                    </div>
                            
                    <div className="third-content">
                        <div className="input">
                            <span className="title">Steps</span>
                            <input onChange={({target})=> setStep({...step, step: target.value})} value={step.step}/>
                            <button onClick={()=> addStep()}>Save</button>
                        </div>
                        <div className="steps">

                            {
                                recipe.steps.length && recipe.steps.map((step)=>
                                    <div className="step">
                                        <Step number={step.number} step={step.step}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </PopUpS>
    );
}