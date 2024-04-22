import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function SearchPage() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([]);

  const fetchData = async (keyword: string | null) => {
    let fetchUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=edd30aa38a66fd481aab68561f86ce5f";
    if (keyword) {
      fetchUrl += `&query=${keyword}`;
    }
    const data = await axios.get(fetchUrl);
    console.log(data.data.results);
    setData(data.data.results);
  };

  useEffect(() => {
    const q = searchParams.get("q");
    console.log(q);
    fetchData(q);
  }, []);

  const getImageElements = data.map((item: any, index: number) => {
    return (
      <div key={index}>
        <Link to={`/movie/${item.id}`} className="">
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            className="rounded-md hover:border-[3px] border-gray-400"
          />
        </Link>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-5 m-5 p-3">{getImageElements}</div>
    </div>
  );
}

export default SearchPage;
