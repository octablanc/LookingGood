import React, { useState, useEffect } from "react";
import PopUpS from "./styles/PopUpStyle";
import { useSelector, useDispatch } from "react-redux";
import { getAllDietTypes } from "../redux/actions/index";
import Step from "./Step";
import Error from "./Error";
import axios from "axios";

export default function PopUp({ deactive }){
    const dispatch = useDispatch();
    const diet_types = useSelector((state)=> state.diet_types);
    const [ recipe, setRecipe ] = useState({
        name: "",
        image: "",
        health_score: 0,
        dish_summary: "",
        DietTypes: [],
        steps: []
    });
    const [ step, setStep ] = useState({
        number: 1,
        step: ""
    });
    const [ error, setError ] = useState( {image: false, name: false, health_score: false});

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

        if(element.name === "health_score")
            setError({...error, [element.name]: true});
        else
            setError({...error, [element.name]: false});
    }

    function validateHealthScore(){
        if(recipe.health_score){
            var number = parseInt(recipe.health_score);
            if(Number.isInteger(number)){
                if(number <= 100 && number >= 1)
                {
                    if(error.health_score)
                        setError({...error, health_score: false});
                    return <></>;
                }
                else{
                    if(!error.health_score)
                        setError({...error, health_score: true});
                    return <Error message={"Enter a number between 1 and 100!"}/>;
                }
            }
            else{
                if(!error.health_score)
                        setError({...error, health_score: true});
                return <Error message={"Health Score can only be a number!"}/>;
            }
        }
        else{
            if(!error.health_score)
                setError({...error, health_score: true});
            return <Error message={"Health Score is required!"}/>;
        }
    }

    function addDiet(element){
        if(element.className === "diet"){
            const newDietTypes = [...recipe.DietTypes, element.id];
            element.className = "active diet";
            setRecipe({
                ...recipe,
                DietTypes: newDietTypes
            });
        }
        else{
            element.className = "diet";
            const newDietTypes = recipe.DietTypes.filter((id)=> id != element.id);
            setRecipe({
                ...recipe,
                DietTypes: newDietTypes
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

    function submit(){
        let newError = error;

        if(!recipe.image)
            newError = {...newError, image: true};

        if(!recipe.name)
            newError = {...newError, name: true};

        if(!recipe.health_score)
            newError = {...newError, health_score: true};

        if(newError.image || newError.name || newError.health_score)
            setError(newError);
        else
            axios.post('http://localhost:3001/recipes', recipe)
            .catch((msg)=> console.log(msg));

        deactive();
    }

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
                                {
                                    error.image? <Error message={"URL is required!"}/> : <></>
                                }
                            </div>

                            <div className="field">
                                <span className="title">Name</span>
                                <input onChange={({target}) => handlerChange(target)} placeholder="Name here" name="name" autoComplete="off"/>
                                {
                                    error.name? <Error message={"Name is required!"}/> : <></>
                                }
                            </div>

                            <div className="field">
                                <span className="title">Health Score</span>
                                <input onChange={({target}) => handlerChange(target)} placeholder="Halth Score here" name="health_score" autoComplete="off"/>
                                {
                                    error.health_score && validateHealthScore()
                                }
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

                    <button 
                        disabled={error.image || error.name || error.health_score} 
                        className={error.image || error.name || error.health_score? "btn-create btn-disabled" : "btn-create"}
                        type="submit" 
                        onClick={()=> submit()} 
                        >Create Recipe</button>
                </div>
            </div>
        </PopUpS>
    );
}