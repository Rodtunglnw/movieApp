import { useEffect, useState } from "react";
import axios from "axios";
import PixarMovieCard from "./PixarMovieCard";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
  // For Tv Show
  first_air_date: number;
  name: string;
}

function PixarMovie() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const getMovie = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=Pixar&api_key=edd30aa38a66fd481aab68561f86ce5f"
    );
    setMovieList(data.data.results);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <div className="m-10 p-5">
        <h1 className="text-3xl text-white font-bold">Disney Movie</h1>
      </div>
      <div className="grid grid-cols-6 gap-4 m-5 p-5">
        {movieList.map((item) => {
          if (item.poster_path) {
            return <PixarMovieCard movie={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default PixarMovie;
