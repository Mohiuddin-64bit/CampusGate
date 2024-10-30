import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CollegeDetails from "../pages/colleges/CollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {path: "", element: <Home />},
      {path: "/colleges/:id", element: <CollegeDetails />}
    ]
  }
])

export default router;