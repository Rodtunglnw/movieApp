import { useEffect, useRef, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function MovieList(props: { genreId: number }) {
  const { genreId } = props;
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef(null);
  const getMovieByGenreId = async (genreId: number) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=edd30aa38a66fd481aab68561f86ce5f&with_genres=${genreId}`
    );
    setMovieList(data.data.results);
  };

  useEffect(() => {
    getMovieByGenreId(genreId);
  }, [genreId]);

  const sliderRight = (element: any) => {
    element.scrollLeft += 1000;
  };

  const sliderLeft = (element: any) => {
    element.scrollLeft -= 1000;
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-[50px] p-2 z-10 cursor-pointer absolute mt-[150px]"
        onClick={() => sliderLeft(elementRef.current)}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5  scroll-smooth"
      >
        {movieList.map((item) => {
          return <MovieCard movie={item} />;
        })}
      </div>

      <HiChevronRight
        className="hidden md:block text-white text-[50px] p-2 z-10 top-0 mt-[150px] cursor-pointer absolute right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
    </div>
  );
}

export default MovieList;
