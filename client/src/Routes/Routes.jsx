import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout";
import { Create, Home } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:4000/api/v1/coffees"),
      },
      {
        path: "create-coffee",
        element: <Create />,
      },
    ],
  },
]);

export default router;
