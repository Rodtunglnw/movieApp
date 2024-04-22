import { useEffect, useState } from "react";
import axios from "axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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

const Slider = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? movieList.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === movieList.length - 1 ? 0 : curr + 1));

  const getMovie = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=edd30aa38a66fd481aab68561f86ce5f"
    );
    setMovieList(data.data.results);
    console.log(data.data.results);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[325px] cursor-pointer"
        onClick={prev}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[325px] cursor-pointer right-2"
        onClick={next}
      />

      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ">
        {movieList.map((item) => {
          return (
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              className="min-w-full md:h-[650px] object-cover object-left-top 
         mr-5 rounded-md hover:border-[4px] border-gray-400"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;

//  <HiChevronLeft
//         className="hidden md:block text-white text-[30px] absolute mx-8 mt-[325px] cursor-pointer"
//         onClick={() => sliderLeft(elementRef.current)}
//       />
//       <HiChevronRight
//         className="hidden md:block text-white text-[30px] absolute mx-8 mt-[325px] cursor-pointer right-2"
//         onClick={next}
//       // />
