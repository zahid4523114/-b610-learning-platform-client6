import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { loggedInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const [error, setError] = useState();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    //passing user email and password as pera meter:
    loggedInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
        console.log(message);
      });
  };
  //sign with google popup:
  const googleSignIn = () => {
    signInWithGoogle();
  };
  //sign with github popup:
  const gitHubSignIn = () => {
    signInWithGitHub();
  };
  return (
    <form onSubmit={handleLogIn}>
      <div className="w-75 mx-auto my-5 shadow-lg p-4 rounded-2">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            required
            type="email"
            class="form-control"
            placeholder="Enter your email"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            required
            type="password"
            class="form-control"
            placeholder="Enter your password"
            name="password"
            id="exampleInputPassword1"
          />
        </div>
        <p className="text-danger">{error}</p>
        <p>
          <Link to="/register">Create a new account?</Link>
        </p>
        <button type="submit" class="btn btn-primary">
          LOG IN
        </button>
        <div className="mt-3 d-flex justify-content-center flex-lg-row flex-column text-center">
          <Link
            className="shadow-lg my-lg-0 my-3 rounded-5 p-2 text-decoration-none me-2"
            onClick={googleSignIn}
          >
            <FcGoogle className="fs-3"></FcGoogle>Sign in Google
          </Link>
          <Link
            className="text-decoration-none p-2 shadow-lg rounded-5"
            onClick={gitHubSignIn}
          >
            <FaGithub className="fs-3 text-dark "></FaGithub>Sign in Github
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
