import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { front_routes } from "../zems/Front/Routes/front_routes";

const router = createBrowserRouter([...front_routes]);

export default router;
