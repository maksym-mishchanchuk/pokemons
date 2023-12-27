import { useState } from 'react'

function App() {
  return (
    <form action="">
      <label htmlFor="firstName">
        Name:
      </label>
      <input id="firstName" type="text"/>

      <label htmlFor="lastName">
       Surname:
      </label>
      <input id="lastName" type="text"/>

      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
      </select>

      <button type="button">Відправити</button>
    </form>
  )
}

export default App
