import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ListPage } from "./components/pages/ListPage";
import Pokemondetailpage from "./components/pages/DetailPage/Pokemondetailpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
  },
  {
    path: "/items/:id",
    element: <Pokemondetailpage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
