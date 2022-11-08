// Importa las action types acá
import {
  GET_ALL_RECIPES,
  GET_ALL_DIET_TYPES
} from '../actions/index.js';

const initialState = {
  recipes: [],
  diet_types: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Acá va tu código:
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

    default:
      return {...state};
  }
};

export default rootReducer;
