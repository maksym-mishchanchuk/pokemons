import { TrainerForm } from "./components/TrainerForm";
import { Modal } from "./components/Modal";
import {useState} from "react";
import { Pokemons } from "./components/Pokemons/Pokemons";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <>
      <TrainerForm />
      <Pokemons />
      <Modal />
    </>
  )
}

export default App
