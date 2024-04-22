import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

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
  genres: [];
  overview: string;
}

function WatchList() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const getData = async () => {
    const favouriteListString = localStorage.getItem("movies");
    if (favouriteListString) {
      const prevFavList = JSON.parse(favouriteListString);
      const getDetailMovie = await Promise.all(
        prevFavList.map(async (item: any) => {
          const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${item}?api_key=edd30aa38a66fd481aab68561f86ce5f`
          );
          return data;
        })
      );
      console.log(getDetailMovie);

      setMovie(getDetailMovie);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getPosterMovie = movie.map((item) => {
    return (
      <Link to={`/movie/${item.id}`} className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          className=" w-[110px] md:min-w-[200px] rounded-lg hover:border-[5px] border-gray-400 hover:scale-110 transition-all duration-150"
        />
      </Link>
    );
  });

  return (
    <div>
      <Header />
      <div className="grid grid-cols-6 gap-4 m-5 p-5">{getPosterMovie}</div>
    </div>
  );
}

export default WatchList;
