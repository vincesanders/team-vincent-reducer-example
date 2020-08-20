import React, { useReducer } from 'react';
import pokemonReducer, { initialState, ADD_POKEMON } from './reducers/pokemonReducer';

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  const submitHandler = (e, newMon) => {
    e.preventDefault();
    dispatch({type: ADD_POKEMON, payload: newMon});
  }

  return (
    <div className="App">
      <PokemonForm submitHandler={submitHandler} />
      <PokemonList pokemon={state.pokemon} />
    </div>
  );
}

export default App;
