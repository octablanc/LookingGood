export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_ALL_DIET_TYPES = "GET_ALL_DIET_TYPES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_RECIPE = "GET_RECIPE";
export const CLEAR_RECIPE = "CLEAR_RECIPE";
export const CLEAR_RECIPES = "CLEAR_RECIPES";
export const CHANGE_OPTIONS = "CHANGE_OPTIONS"; 

export const getAllRecipes = (name) => {
    return async function (dispatch) {
        fetch("http://localhost:3001/recipes" + (name ? "?name=" + name : ""))
            .then(response => response.json())
            .then((data) => dispatch({ type: GET_ALL_RECIPES, payload: data }))
            .catch(()=> dispatch({ type: GET_ALL_RECIPES, payload: [] }));
    };
}

export const getAllDietTypes = () => {
    return async function (dispatch) {
        return fetch("http://localhost:3001/diet_types")
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_ALL_DIET_TYPES, payload: data }))
            .catch(() => dispatch({ type: GET_ALL_DIET_TYPES, payload: [] }));
    }
};

export const changePage = (page) => {
    return { type: CHANGE_PAGE, payload: page }
}

export const getRecipe = (Id) => {
    return async function (dispatch) {
        return fetch("http://localhost:3001/recipes/" + Id)
            .then((response) => response.json())
            .then((data) => dispatch({ type: GET_RECIPE, payload: data }))
            .catch(() => dispatch({ type: GET_RECIPE, payload: {} }));
    }
}

export const clearRecipe = () => {
    return { type: CLEAR_RECIPE, payload: {} }
}

export const clearRecipes = () => {
    return { type: CLEAR_RECIPES, payload: [] }
}

export const changeOptions = (options) => {
    return { type: CHANGE_OPTIONS, options }
}