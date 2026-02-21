import { createBrowserRouter, Navigate } from "react-router-dom";
import { ListPage } from "../components/pages/ListPage";
import Pokemondetailpage from "../components/pages/DetailPage/Pokemondetailpage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/items" />,
  },
  {
    path: "/items",
    element: <ListPage />,
  },
  {
    path: "/items/:id",
    element: <Pokemondetailpage />,
  },
]);

export default routes;
