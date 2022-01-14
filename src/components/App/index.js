import Search from "../SearchBarAndButton";
import Title from "../Title";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e);
    console.log(input);
  }

  return (
    <div className="App">
      <Title />
      <Search
        handleChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
