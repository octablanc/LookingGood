import {
  GET_ALL_RECIPES,
  GET_ALL_DIET_TYPES,
  GET_RECIPE,
  CLEAR_RECIPE,
  CLEAR_RECIPES,
  CHANGE_PAGE,
  CHANGE_OPTIONS
} from '../actions/index.js';

const initialState = {
  recipes: [],
  diet_types: [],
  recipeDetail: {},
  options: { ascendant: false, descending: false, diet: ""},
  page: 1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }

    case GET_ALL_DIET_TYPES:
      return {
        ...state,
        diet_types: action.payload
      }

    case GET_RECIPE:
      return {
        ...state,
        recipeDetail: action.payload
      }

    case CLEAR_RECIPE:
      return {
        ...state,
        recipeDetail: action.payload
      }

    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }
    
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload
      }

    case CHANGE_OPTIONS:
      return {...state, options: action.options}
    default:
      return {...state};
  }
};

export default rootReducer;
