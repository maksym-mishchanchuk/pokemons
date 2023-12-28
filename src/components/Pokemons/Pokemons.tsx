import React, { MouseEventHandler, useState } from "react";
import { Pokemon} from "../../types/pokemon";

type Props = {
  pokemons: Pokemon[],
}
export const Pokemons: React.FC<Props> = ({ pokemons }) => {
  const [searchPokemon, setSearchPokemon] = useState<string>('');
  const [selectedPokemons, setSelectedPokemons] = useState<Pokemon[]>([]);
  const [isPokemonListOpen, setIsPokemonListOpen] = useState<boolean>(false);

  const  visiblePokemons = searchPokemon
    ? pokemons.filter(({ name }) => name.includes(searchPokemon.trim()))
    : pokemons

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon(event.target.value)
  };

  const closeOpenPokemonList = () => {
    setIsPokemonListOpen(prevState => !prevState);
  }

  const selectPokemon = (pokemon: Pokemon) => {
    setSelectedPokemons((prev) =>
      prev.includes(pokemon)
        ? prev.filter((onePokemon) => onePokemon.name !== pokemon.name)
        : [...prev, pokemon]
    );
  }

  return (
    <div>
      <label htmlFor="pokemonTeam">Виберіть свою команду Pokémon:</label>

      <input
        onChange={handleInputChange}
        id='pokemonTeam'
        type="text"
        placeholder='search pokemon'
      />

      <input
        value={selectedPokemons.map((pokemon) => pokemon.name).join(', ')}
        type="text"
      />
      <button
        onClick={() => setSelectedPokemons([])}
        type="button"
      >
        X
      </button>
      <button
        onClick={closeOpenPokemonList}
        type="button"
      >
        ˆ
      </button>

      {isPokemonListOpen && (
          visiblePokemons.map(pokemon => (
         <div>
           <button
             onClick={() => selectPokemon(pokemon)}
             type="button"
             key={pokemon.name}
           >
             {pokemon.name}
           </button>
         </div>
      )))}
    </div>
  )
}
