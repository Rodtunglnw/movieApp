import Header from '../components/Header'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function MoviePages() {
  const [movie, setMovie] = useState([])

  const getMovie = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=edd30aa38a66fd481aab68561f86ce5f");
    setMovie(data.data.results);
  }
  useEffect(() => {
    getMovie()
  }, [])
  const getImageMovieElements = movie.map((item: any, index: number) => {
    return (
      <div key={index}>
        <Link to={`/movie/${item.id}`} className='w-full'>
          <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            className=' w-[110px] md:min-w-[200px] rounded-lg hover:border-[5px] border-gray-400 hover:scale-110 transition-all duration-150' />
        </Link>
      </div>
    )

  })
  return (
    <div>
      <Header />
      <Slider />
      <div className='flex justify-center font-bold m-10 p-5'>
        <h1 className='text-white text-4xl underline'>Trending Movies</h1>
      </div>
      <div className='grid grid-cols-5 gap-5 m-5 p-3'>
        {getImageMovieElements}
      </div>
    </div>
  )
}

export default MoviePages