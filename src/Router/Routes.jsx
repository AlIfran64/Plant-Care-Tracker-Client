import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AddPlant from "../Pages/AddPlant/AddPlant";
import AllPlants from "../Pages/AllPlants/AllPlants";
import MyPlants from "../Pages/MyPlants/MyPlants";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/plants'),
        hydrateFallbackElement:
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/addPlant',
        element: <AddPlant></AddPlant>
      },
      {
        path: '/allPlants',
        element: <AllPlants></AllPlants>,
        loader: () => fetch('http://localhost:3000/plants'),
        hydrateFallbackElement:
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/myPlants',
        element: <MyPlants></MyPlants>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);