import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AddPlant from "../Pages/AddPlant/AddPlant";
import AllPlants from "../Pages/AllPlants/AllPlants";
import MyPlants from "../Pages/MyPlants/MyPlants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/addPlant',
        element: <AddPlant></AddPlant>
      },
      {
        path: '/allPlants',
        element: <AllPlants></AllPlants>
      },
      {
        path: '/myPlants',
        element: <MyPlants></MyPlants>
      }
    ]
  },
]);