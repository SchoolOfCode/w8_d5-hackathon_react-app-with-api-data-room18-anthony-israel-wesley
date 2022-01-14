function Search(handleClick, handleInput) {
  return (
    <div className="search-box">
      <input
        className="search-input"
        placeholder="What's on your mind?"
        type="text"
        onUpdate={handleInput}
      ></input>
      <button className="search-button" onClick={handleClick}>
        Gime me THE NEWS!
      </button>
    </div>
  );
}

export default Search;
