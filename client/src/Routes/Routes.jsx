import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout";
import { Create, Home, Update } from "../Pages";

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
      {
        path: "update-coffee/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/api/v1/coffees/${params.id}`),
      },
    ],
  },
]);

export default router;
