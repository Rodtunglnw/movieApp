import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import AddWatchList from "./AddWatchList";

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

function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState<Movie>({
    id: 0,
    title: "",
    poster_path: "",
    release_date: "",
    vote_average: 0,
    backdrop_path: "",
    first_air_date: 0,
    name: '',
    genres: [],
    overview: ''
  });
  const [movieGenres, setMovieGenres] = useState<Movie[]>([]);
  const getMovieData = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=edd30aa38a66fd481aab68561f86ce5f`
    );
    setMovieDetail(data.data);
    setMovieGenres(data.data.genres);
    console.log(data);
  };
  const getGenresMovieElements = movieGenres.map((item) => {
    return <p className=" ml-3 mt-1 text-white text-2xl">{item.name}</p>;
  });

  useEffect(() => {
    getMovieData();
  }, [movieId]);

  return (
    <>
      <Header />

      <div className="relative h-screen bg-zinc-900 z-10 ">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          className="absolute top-0 -z-20 w-full h-full  left-0 brightness-50 bg-cover blur-sm"
        />
        <div className="flex justify-center">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            className="w-[400px] h-[450px] bg-cover m-9"
          />
        </div>
        <div className="flex justify-center m-5">
          <h1 className="font-bold text-white text-4xl ">
            {movieDetail.title}
          </h1>
        </div>
        <div className="">
          <h1 className="text-white text-3xl ml-11 mb-5 font-bold underline">
            Description
          </h1>
          <h2 className="text-white text-2xl  ml-11 mb-11">
            {movieDetail.overview}
          </h2>
        </div>
        <div className="flex">
          <h1 className="text-white text-3xl ml-11 mb-5 font-bold underline">
            Genres :
          </h1>
          {getGenresMovieElements}
        </div>
        <div className="flex">
          <h1 className="text-white text-3xl ml-11 mb-5 font-bold underline">
            Release Date :
          </h1>
          <p className="ml-3 mt-1 text-white text-2xl">
            {movieDetail.release_date}
          </p>
        </div>
        <div className="z-50">
          <AddWatchList movieId={movieId} />
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
