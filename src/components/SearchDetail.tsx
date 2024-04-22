import axios from "axios";
import { useEffect } from "react";

function SearchDetail(props: any) {
  const { keyword } = props;
  const getMovieDetail = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=edd30aa38a66fd481aab68561f86ce5f`
    );
    console.log(data);
  };

  useEffect(() => {
    getMovieDetail();
  }, [keyword]);
  return (
    <div>
      <h1 className="text-white">Thanaphon</h1>
    </div>
  );
}

export default SearchDetail;
