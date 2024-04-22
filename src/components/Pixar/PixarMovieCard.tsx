import { Link } from 'react-router-dom'
interface Movie {
    id : number
    title : string
    poster_path : string
    release_date : string
    vote_average : number
    backdrop_path : string
    // For Tv Show
    first_air_date : number
    name : string
  }
function PixarMovieCard(props : { movie: Movie }) {
    const {movie} = props 
  return (
    <Link to={`/movie/${movie.id}`} className='w-full'>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
        className=' w-[110px] md:min-w-[200px] rounded-lg hover:border-[5px] border-gray-400 hover:scale-110 transition-all duration-150'/>
    </Link>
  )
}

export default PixarMovieCard