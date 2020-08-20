import { act } from "react-dom/test-utils";

export const initialState = {
    pokemon: [],
    currentId: 0
}

/*
name: string
caught: bool
id: int
*/

export const ADD_POKEMON = "ADD_POKEMON";

const pokemonReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POKEMON":
            return {...state, 
                pokemon: [
                ...state.pokemon, 
                {
                    name: action.payload, 
                    caught: false, 
                    id: state.currentId
                }], 
                currentId: currentId + 1
            };
        default:
            return state;
    }
}

export default pokemonReducer;