import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MoviePages from "./pages/MoviePages";
import HomePage from "./pages/HomePage";
import MovieDetail from "./components/MovieDetail";
import StarwarPage from "./pages/StarwarPage";
import PixarPage from "./pages/PixarPage";
import MarvelPage from "./pages/MarvelPage";
import DisneyPage from "./pages/DisneyPage";
import NationalGPage from "./pages/NationalGPage";
import WatchList from "./pages/WatchList";
import Tv from "./pages/Tv";
import SearchPage from "./pages/SearchPage";
import { BASE_GITHUB_URL } from "./config";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "movies",
      element: <MoviePages />,
    },
    {
      path: "/movie/:movieId",
      element: <MovieDetail />,
    },
    {
      path: "starwar",
      element: <StarwarPage />,
    },
    {
      path: "marvel",
      element: <MarvelPage />,
    },
    {
      path: "pixar",
      element: <PixarPage />,
    },
    {
      path: "nationalgeographic",
      element: <NationalGPage />,
    },
    {
      path: "disney",
      element: <DisneyPage />,
    },
    {
      path: "watchlist",
      element: <WatchList />,
    },
    {
      path: "tv",
      element: <Tv />,
    },
    {
      path: "search",
      element: <SearchPage />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : BASE_GITHUB_URL }
);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
