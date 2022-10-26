import { createBrowserRouter } from "react-router-dom";
import Blog from "../blog/Blog";
import Courses from "../courses/Courses";
import Faq from "../faq/Faq";
import Home from "../home/Home";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../register/Register";
import { HiExclamation } from "react-icons/hi";
import CourseDetails from "../courseDetails/CourseDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CheckoutPage from "../checkoutPage/CheckoutPage";

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
        path: "/home",
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
        loader: () => fetch("https://b610-node-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`https://b610-node-server.vercel.app/course/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/course/detail/:id",
        loader: ({ params }) =>
          fetch(
            `https://b610-node-server.vercel.app/course/detail/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
        ),
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
