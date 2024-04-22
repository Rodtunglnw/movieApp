import { useEffect, useState } from "react";

function AddWatchList(props: any) {
  const { movieId } = props;
  const [isFav, setIsFav] = useState(false);

  const handleAddFav = () => {
    let favouriteList = [movieId];

    const favouriteListString = localStorage.getItem("movies");
    if (favouriteListString) {
      const prevFavList = JSON.parse(favouriteListString);
      favouriteList = [...prevFavList, movieId];
    }

    setIsFav(true);
    localStorage.setItem("movies", JSON.stringify(favouriteList));
  };

  const handleRemoveFav = () => {
    let favouriteList = [];

    const favouriteListString = localStorage.getItem("movies");
    if (favouriteListString) {
      const prevFavList = JSON.parse(favouriteListString);
      favouriteList = prevFavList.filter((mId: number) => mId !== movieId);
    }

    setIsFav(false);
    localStorage.setItem("movies", JSON.stringify(favouriteList));
  };

  const handleFav = () => {
    if (isFav) {
      handleRemoveFav();
    } else {
      handleAddFav();
    }
  };

  useEffect(() => {
    const favouriteListString = localStorage.getItem("movies");
    if (favouriteListString) {
      const favList = JSON.parse(favouriteListString);
      setIsFav(favList.includes(movieId));
    }
  }, []);

  return (
    <div className="flex justify-center m-5 z-50">
      <button
        onClick={handleFav}
        className=" rounded-lg border-[5px] border-gray-500 p-5 w-[400px] bg-stone-900 text-white z-50"
      >
        {isFav ? "Delete from FavList" : "Add to Watch List"}
      </button>
    </div>
  );
}

export default AddWatchList;

// ///  useEffect(() => {
//     // const favouriteListString = localStorage.getItem("movies");
//     // if (favouriteListString) {
//     //   const favList = JSON.parse(favouriteListString);
//     //   setIsFav(favList.includes(movieId));
//     // }
//   }, []);
