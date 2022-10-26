import { createBrowserRouter } from "react-router-dom";
import Blog from "../blog/Blog";
import Courses from "../courses/Courses";
import Faq from "../faq/Faq";
import Home from "../home/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../register/Register";
import { HiExclamation } from "react-icons/hi";

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
        loader: () => fetch("http://localhost:3500/courses"),
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
  {
    path: "*",
    element: (
      <div className="text-center mt-5">
        <h1>404!</h1>
        <h2>
          Couldn't found the page...
          <HiExclamation className="text-danger"></HiExclamation>
        </h2>
      </div>
    ),
  },
]);
