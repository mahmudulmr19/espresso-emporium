import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout";
import { Home } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
