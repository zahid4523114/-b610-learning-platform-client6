import React from "react";
import "./header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../header-logo.png";
import { AuthContext } from "../context/UserContext";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const userSignOut = () => {
    signOutUser();
  };
  return (
    <nav class="navbar bg-light">
      <div class="container-fluid d-flex flex-lg-row flex-md-column flex-column">
        <Link class="navbar-brand">
          <img src={logo} alt="Logo" class="d-inline-block align-text-top" />
        </Link>
        <Link
          className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
          to="/faq"
        >
          FAQ
        </Link>
        <Link
          className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
          to="/blog"
        >
          Blog
        </Link>
        {user?.photoURL || user?.uid ? (
          <>
            <Link
              onClick={userSignOut}
              className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
            >
              Log Out
            </Link>
            <img
              style={{ height: "50px", borderRadius: "50%" }}
              title={user?.displayName}
              src={user?.photoURL}
              alt="Logo"
            />
          </>
        ) : (
          <>
            <Link
              className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
              to="/login"
            >
              Log In
            </Link>
            <span className="fs-2">{<FaUser></FaUser>}</span>
          </>
        )}
        {
          <>
            <label class="switch mt-lg-0 mt-md-0 mt-2">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </>
        }
      </div>
    </nav>
  );
};

export default Header;
