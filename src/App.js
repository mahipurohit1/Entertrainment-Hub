import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Trending from "./components/Trending/Trending";
import TvSeries from "./components/TvSeries/TvSeries";
import RootPage from "./Pages/RootPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootPage></RootPage>,
    children: [
      { index: true, element: <Trending></Trending> },
      { path: "/movies", element: <Movies></Movies> },
      { path: "/tvSeries", element: <TvSeries></TvSeries> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
