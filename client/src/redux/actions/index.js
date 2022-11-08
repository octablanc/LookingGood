export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";


export const getAllMovies = (name) => {
    return async function(dispatch){
        return fetch("http://localhost:3000/recipes?name=" + name? name: "")
        .then( (response)=> response.json() )
        .then( (data)=> dispatch({type: GET_ALL_RECIPES, payload: data}) );
    }
 };

 export const getAllDietTypes = () => {
    return async function(dispatch){
        return fetch("http://localhost:3000/diet_types")
        .then( (response)=> response.json() )
        .then( (data)=> dispatch({type: GET_ALL_DIET_TYPES, payload: data}) );
    }
 };
