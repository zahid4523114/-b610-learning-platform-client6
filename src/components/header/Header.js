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
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand">
          <img src={logo} alt="Logo" class="d-inline-block align-text-top" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-lg-flex justify-content-lg-end"
          id="navbarNav"
        >
          <ul class="navbar-nav d-lg-flex align-items-lg-center">
            <li class="nav-item me-lg-5">
              <Link
                className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li class="nav-item me-lg-5">
              <Link
                className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
                to="/courses"
              >
                Courses
              </Link>
            </li>
            <li class="nav-item me-lg-5">
              <Link
                className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li class="nav-item me-lg-5">
              <Link
                className="text-decoration-none mb-lg-0 mb-md-0 btn fs-3 link-primary mb-2"
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li class="nav-item me-lg-5">
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
            </li>
            <li className="nav-item me-lg-5 d-flex align-items-center">
              <label class="switch mt-lg-0 mt-md-0 mt-2">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              <span className="ms-2 fw-bold">Theme</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
