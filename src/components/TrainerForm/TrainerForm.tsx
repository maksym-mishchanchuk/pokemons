import { useForm } from "react-hook-form";
import {Pokemons} from "../Pokemons/Pokemons";
import {Pokemon} from "../../types/pokemon";
import React from "react";

type Props = {
  pokemons: Pokemon[],
}

export const  TrainerForm: React.FC<Props> = ({ pokemons }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form action="">
      <label htmlFor="firstName">
        Name:
      </label>
      <input  {...register('firstName', { required: true })}/>

      <label htmlFor="lastName">
        Surname:
      </label>
      <input {...register('lastName', { required: true })}/>

      <div>

      </div>
      <Pokemons pokemons={pokemons} />

      <button type="submit">Відправити</button>
    </form>
  )
}
