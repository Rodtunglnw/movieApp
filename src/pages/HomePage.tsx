import "../App.css";
import Header from "../components/Header";
import AnimatedCard from "../components/AnimatedCard";
import GenresMovieList from "../components/GenresMovieList";
import Carousel2 from "../components/Carousel2";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel2 />
      <AnimatedCard />
      <GenresMovieList />
    </div>
  );
}

export default HomePage;
