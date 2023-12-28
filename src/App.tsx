import { TrainerForm } from "./components/TrainerForm";
import { Modal } from "./components/Modal";
import { useEffect, useState } from "react";
import { Pokemon } from "./types/pokemon";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([])
  const getPokemonList = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      return response.data.results;
    }
    catch(err) {
      console.error('Error fetching Pokemon:', err);
    }
  }

  useEffect(() => {
    const a  = getPokemonList()
      .then(p => {
        console.log(p);
        setPokemons(p)
      })
  }, []);

  const closeModal = () => {
    setIsModalOpen(prevState => !prevState);
  }

  return (
    <>
      <TrainerForm pokemons={pokemons} />
      <Modal />
    </>
  )
}

export default App
