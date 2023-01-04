import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import LocationsPage from "./pages/LocationsPage";
import CharacterPage from "./pages/CharacterPage";

export const navigation = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "Locations",
    path: "/locations",
    element: <LocationsPage />,
  },
  {
    name: "Character",
    path: "/character/:id",
    element: <CharacterPage />,
    hidden: true,
  }
];

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: navigation
  }
]);

export default router;