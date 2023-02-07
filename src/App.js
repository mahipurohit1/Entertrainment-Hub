import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MoviesPage from "./Pages/MoviesPage";
import RootPage from "./Pages/RootPage";
import SearchPage from "./Pages/SearchPage";
import TrendingPage from "./Pages/TrendingPage";
import TvSeriesPage from "./Pages/TvSeriesPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage></RootPage>,
    children: [
      { index: true, element: <TrendingPage></TrendingPage> },
      { path: "/movies", element: <MoviesPage></MoviesPage> },
      { path: "/tvSeries", element: <TvSeriesPage></TvSeriesPage> },
      { path: "/Search", element: <SearchPage></SearchPage> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
