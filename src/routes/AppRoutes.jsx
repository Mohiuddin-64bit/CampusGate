import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CollegeDetails from "../pages/colleges/CollegeDetails";
import Admission from "../pages/admission/Admission";
import CollegePage from "../pages/CollegePage";
import Login from "../features/Authentication/Login";
import Register from "../features/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home /> },
      { path: "/colleges/:id", element: <CollegeDetails /> },
      { path: "/college", element: <CollegePage /> },
      { path: "/admission", element: <Admission /> },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

export default router;