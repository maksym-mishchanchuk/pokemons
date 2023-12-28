import { useForm } from "react-hook-form";

export const  TrainerForm = () => {
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

      <label htmlFor="pokemonTeam">Виберіть свою команду Pokémon:</label>
      {/* Ваш компонент вибору Pokemon тут */}
      {/*<select multiple>*/}
      {/*  {options.map((pokemon) => (*/}
      {/*    <option key={pokemon.value} value={pokemon.value}>*/}
      {/*      {pokemon.label}*/}
      {/*    </option>*/}
      {/*  ))}*/}
      {/*</select>*/}

      <button type="submit">Відправити</button>
    </form>
  )
}
