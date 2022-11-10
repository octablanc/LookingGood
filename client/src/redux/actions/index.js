export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";
export const CHANGE_PAGE = "CHANGE_PAGE";

export const getAllRecipes = (name) => {
    return async function(dispatch){
        Promise.all(
            [
                fetch("http://localhost:3001/recipes" + (name? "?name="+name : "")).then( response=> response.json()),
                fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=e89f6ab372924b83a996fac3902fc30b&addRecipeInformation=true&number=40" + (name? "&query="+name : "")).then((response)=> response.json())
            ]
        ).then((responses)=> {
            var payload = [];

            payload = Array.isArray(responses[0])? responses[0] : [];
            console.log(payload);

            var recipesFromExternalApiParsed = responses[1].results && responses[1].results.map((recipe)=> {
                return {
                    Id: recipe.id,
                    name: recipe.title,
                    dish_summary: recipe.summary,
                    heal_score: recipe.healthScore,
                    image: recipe.image,
                    diets: recipe.diet,
                    steps: recipe.analyzedInstructions.length ? recipe.analyzedInstructions[0].steps : []
                }
            });

            // payload = [...payload, ...recipesFromExternalApiParsed];

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
