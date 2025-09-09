
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState(null);

  const handleNameInput = (name) => {
    setName(name);
  }

  return (
    <div>
      <label for="name" >Enter your name:</label> <br />
      <input name="name" onChange={(e) => handleNameInput(e.target.value.trim())} />
      <br />
      {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
