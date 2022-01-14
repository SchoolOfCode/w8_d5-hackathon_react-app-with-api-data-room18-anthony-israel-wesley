import Search from "../SearchBarAndButton";
import Title from "../Title";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");

  const [news, setNews]= useState([]);

  function handleChange(e) {
    setInput(e);
    console.log(input);
  }

const APIKEY = `e372521f6da04a91a17cde0485cf0153`;
const API_URL = `https://newsapi.org/v2/everything?q=${input}&from=2022-01-14&sortBy=popularity&apiKey=${APIKEY}`

useEffect(()=>{

const loadData = async() =>{

const response = await fetch (API_URL);
const data = await response.json()
console.log(data)
setNews(data)

}


loadData()

},[API_URL])








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
