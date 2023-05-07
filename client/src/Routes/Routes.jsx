import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
