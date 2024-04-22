/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
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
  const getMovieByGenreId = async (genreId: number) => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=edd30aa38a66fd481aab68561f86ce5f&with_genres=${genreId}`
    );
    setMovieList(data.data.results);
  };

  useEffect(() => {
    getMovieByGenreId(genreId);
  }, [genreId]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };

  return (
    <div className="">
      <Slider {...settings} className="">
        {movieList.map((item) => {
          return <MovieCard movie={item} />;
        })}
      </Slider>
    </div>
  );
}
export default MovieList;
