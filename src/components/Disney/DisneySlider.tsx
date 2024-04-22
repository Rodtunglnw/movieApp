import { useEffect, useState } from "react";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import picture from "../../../public/images/unavailable-image.jpg";

// Type For Api Data
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

const DisneySlider = () => {
  const [curr, setCurr] = useState(0);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? movieList.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === movieList.length - 1 ? 0 : curr + 1));
  const getMovie = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=Pixar&api_key=edd30aa38a66fd481aab68561f86ce5f"
    );
    setMovieList(data.data.results);
    console.log(data.data.results);
  };

  const getImgElements = movieList.map((item) => {
    if (item.backdrop_path) {
      return (
        <img
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          className="min-w-full md:h-[650px] object-cover object-left-top 
         mr-5 rounded-md hover:border-[4px] border-gray-400"
        />
      );
    } else {
      return (
        <img
          src={picture}
          className="min-w-full md:h-[650px] object-cover
         mr-5 rounded-md hover:border-[4px] border-gray-400"
        />
      );
    }
  });

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="overflow-hidden relative m-10">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {getImgElements}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <HiChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <HiChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default DisneySlider;
