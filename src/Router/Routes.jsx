import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AddPlant from "../Pages/AddPlant/AddPlant";
import AllPlants from "../Pages/AllPlants/AllPlants";
import MyPlants from "../Pages/MyPlants/MyPlants";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdatePlant from "../Pages/UpdatePlant/UpdatePlant";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import DashBoardContent from "../Pages/DashBoardContent/DashBoardContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://plantify-server-beige.vercel.app/plants'),
        hydrateFallbackElement:
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/addPlant',
        element:
          <PrivateRoutes>
            <AddPlant></AddPlant>
          </PrivateRoutes>
      },
      {
        path: '/allPlants',
        element: <AllPlants></AllPlants>,
        loader: () => fetch('https://plantify-server-beige.vercel.app/sortedPlants'),
        hydrateFallbackElement:
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/viewDetails/:id',
        element:
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://plantify-server-beige.vercel.app/plants/${params.id}`),
        hydrateFallbackElement:
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/myPlants',
        element:
          <PrivateRoutes>
            <MyPlants></MyPlants>
          </PrivateRoutes>,
        loader: () => fetch('https://plantify-server-beige.vercel.app/plants'),
        hydrateFallbackElement:
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/updatePlant/:id',
        element: <UpdatePlant></UpdatePlant>,
        loader: ({ params }) => fetch(`https://plantify-server-beige.vercel.app/plants/${params.id}`),
        hydrateFallbackElement:
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
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
    path: '/dashBoard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        index: true,
        element:
          <PrivateRoutes>
            <DashBoardContent></DashBoardContent>
          </PrivateRoutes>,
        loader: () => fetch('https://plantify-server-beige.vercel.app/plants'),
        hydrateFallbackElement:
          <div className='w-11/12 h-screen mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);