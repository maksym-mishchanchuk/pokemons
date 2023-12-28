import React, { useState } from "react";
import { Pokemon} from "../../types/pokemon";

type Props = {
  pokemons: Pokemon[],
}
export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  const [searchPokemon, setSearchPokemon] = useState('');
  const  visiblePokemons = searchPokemon ? pokemons.filter(({ name }) => name.includes(searchPokemon.trim())): pokemons

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon(event.target.value)
  };

  return (
    <div>
      <label htmlFor="pokemonTeam">Виберіть свою команду Pokémon:</label>

      <input
        onChange={handleInputChange}
        id='pokemonTeam'
        type="text"
        placeholder='search pokemon'
      />

      <select>
        {visiblePokemons.map(pokemon => (
         <option key={pokemon.name}>
           {pokemon.name}
         </option>
        ))}
      </select>
    </div>
  )
}
