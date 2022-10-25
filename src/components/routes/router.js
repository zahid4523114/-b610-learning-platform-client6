import { createBrowserRouter } from "react-router-dom";
import Blog from "../blog/Blog";
import Courses from "../courses/Courses";
import Faq from "../faq/Faq";
import Home from "../home/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
