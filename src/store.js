import {createStore} from 'redux';

const initialState = {
  recipe_name: '',
  recipe_cat: '',
  authorFirst: '',
  authorLast: '',
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_AUTHOR_FIRST';
export const UPDATE_AUTHOR_LAST = 'UPDATE_AUTHOR_LAST';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const ADD_RECIPE = 'ADD_RECIPE';
export const CLEAR_INPUT = 'CLEAR_INPUT';
export const DELETE_RECIPE = 'DELETE_RECIPE';


function reducer(state = initialState, action) {
  const {type, payload} = action;
  switch(type) {
    case UPDATE_NAME:
      return {...state, recipe_name: payload};
    case UPDATE_CATEGORY:
      return {...state, recipe_cat: payload};
    case UPDATE_AUTHOR_FIRST:
      return {...state, authorFirst: payload};
    case UPDATE_AUTHOR_LAST:
      return {...state, authorLast: payload};
    case ADD_INGREDIENT:
      const newIngredients = [...state.ingredients, payload];
      return {...state, ingredients: newIngredients};
    case ADD_INSTRUCTION:
      const newInstructions = [...state.instructions, payload];
      return {...state, instructions: newInstructions};
    case ADD_RECIPE:
      const {
        recipe_name,
        recipe_cat,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      } = state;
      const recipe = {
        recipe_name,
        recipe_cat,
        authorFirst,
        authorLast,
        ingredients,
        instructions
      };
      const newRecipes = [...state.recipes, recipe];
      return { ...state, recipes: newRecipes };
    case CLEAR_INPUT:
      return {...state, 
        recipe_name: '',
        recipe_cat: '',
        authorFirst: '',
        authorLast: '',
        ingredients: [],
        instructions: [],
      };
    case DELETE_RECIPE:
      const { recipes } = state;
      recipes.splice(payload, 1);
      return{...state, recipes: recipes};
    default:
      return state;
  }
}

export default createStore(reducer)
