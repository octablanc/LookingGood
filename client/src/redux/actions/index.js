const API_KEY = 'e89f6ab372924b83a996fac3902fc30b';
  
export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_RECIPE = "GET_RECIPE";
export const CLEAR_RECIPE = "CLEAR_RECIPE";
export const CLEAR_RECIPES = "CLEAR_RECIPES";

function recipeApiParser(recipe){
    return {
        Id: recipe.id,
        name: recipe.title,
        dish_summary: recipe.summary,
        health_score: recipe.healthScore,
        image: recipe.image,
        DietTypes: recipe.diet,
        steps: recipe.analyzedInstructions.length ? recipe.analyzedInstructions[0].steps : []
    }
}

export const getAllRecipes = (name) => {
    return async function(dispatch){
        Promise.all(
            [
                fetch("http://localhost:3001/recipes" + (name? "?name="+name : "")).then( response=> response.json()),
                fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=40` + (name? "&query="+name : "")).then((response)=> response.json())
            ]
        ).then((responses)=> {
            var payload = [];

            payload = Array.isArray(responses[0])? responses[0] : [];

            var recipesFromExternalApiParsed = responses[1] && responses[1].results? responses[1].results.map((recipe)=> {
                return recipeApiParser(recipe)
            }) : [];

            payload = [...payload, ...recipesFromExternalApiParsed];
            dispatch({type: GET_ALL_RECIPES, payload});
        });
    }
 };

 export const getAllDietTypes = () => {
    return async function(dispatch){
        return fetch("http://localhost:3001/diet_types")
        .then( (response)=> response.json() )
        .then( (data)=> dispatch({type: GET_ALL_DIET_TYPES, payload: data}) );
    }
 };

 export const changePage = (page)=> {
    return { type: CHANGE_PAGE, payload: page}
 }

 export const getRecipe = (Id) => {
    return async function(dispatch){
        if(Id.includes('-'))
            return fetch("http://localhost:3001/recipes/" + Id)
            .then( (response)=> response.json())
            .then( (data )=> dispatch( { type: GET_RECIPE, payload: data } ))
        else
            return fetch(`https://api.spoonacular.com/recipes/${Id}/information?apiKey=${API_KEY}`)
            .then( (response)=> response.json())
            .then( (data)=> dispatch( { type: GET_RECIPE, payload: recipeApiParser(data) } ))
    }
 }

 export const clearRecipe = () => {
    return { type: CLEAR_RECIPE, payload: {} }
 }

 export const clearRecipes = () => {
    return { type: CLEAR_RECIPES, payload: [] }
 }