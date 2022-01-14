import "./index.css";

function Search({ handleClick, handleChange }) {
  return (
    <div className="search-box">
      <input
        className="search-input"
        placeholder="What's on your mind?"
        type="text"
        onChange={handleChange}
      ></input>
      <button className="search-button" onClick={handleClick}>
        Gimme THE NEWS!
      </button>
    </div>
  );
}

export default Search;
