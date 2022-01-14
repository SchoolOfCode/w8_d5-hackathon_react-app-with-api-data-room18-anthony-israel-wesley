import Search from "../SearchBarAndButton";
import Title from "../Title";
import "./App.css";
import { useState, useEffect } from "react";
import NewsDisplayCard from "../NewsDisplayCard";

function App() {
  const [input, setInput] = useState("");

  const [clicked, setClicked] = useState(false);

  const [news, setNews] = useState([]);

  function handleChange(e) {
    setInput(e);
    console.log(input);
  }

  function handleClick() {
    setClicked(!clicked);
    console.log(clicked);
  }

  const APIKEY = `e372521f6da04a91a17cde0485cf0153`;
  const API_URL = `https://newsapi.org/v2/everything?q=${input}&from=2022-01-14&sortBy=popularity&apiKey=${APIKEY}`;

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setNews(data);
    };

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
      {if(news!==[]){

      
        news.map(function (item) {
        return <NewsDisplayCard title={item.article.title} />;
      })}}
    </div>
  );
}

export default App;
