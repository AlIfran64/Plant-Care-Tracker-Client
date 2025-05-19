import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
]);