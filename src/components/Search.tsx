import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [searchKey, setSearchKey] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        className="w-[500px] rounded-lg border-[4px] border-gray-700"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <Link to={"/search?q=" + searchKey}>
        <button
          className="text-white font-bold ml-3 border-[3px] rounded-lg p-1"
          type="submit"
        >
          Search
        </button>
      </Link>
    </div>
  );
}

export default Search;

//https://api.themoviedb.org/3/search/movie?query=${searchKey}&api_key=edd30aa38a66fd481aab68561f86ce5f
