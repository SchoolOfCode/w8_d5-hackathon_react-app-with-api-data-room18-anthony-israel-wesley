import Search from "../SearchBarAndButton";
import Title from "../Title";
import "./App.css";
import { useState, useEffect } from "react";
import NewsDisplayCard from "../NewsDisplayCard";
import { ListContainer } from "../ListContainer";

function App() {
  const [input, setInput] = useState("");

  const [clicked, setClicked] = useState(false);

  const [news, setNews] = useState({});

  function handleChange(e) {
    setInput(e);
    console.log(input);
  }

  function handleClick() {
    setClicked(!clicked);
    console.log(clicked);
    console.log(news.articles);
  }

  const APIKEY = `813a015ec017457c962758da9599e8f9`;
  const API_URL = `https://newsapi.org/v2/everything?q=${input}&from=2022-01-14&sortBy=popularity&apiKey=${APIKEY}`;

  const loadData = async () => {
    const response = await fetch(API_URL);
    setNews(await response.json());
  };

  useEffect(() => {
    loadData();
  }, [clicked]);

  return (
    <div className="App">
      <Title />
      <Search
        handleChange={(e) => {
          handleChange(e.target.value);
        }}
        handleClick={handleClick}
      />
      <ListContainer news={news.articles} />
    </div>
  );
}

export default App;
