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
        console.log(user);
        navigate(from, { replace: true });
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
            type="email"
            class="form-control"
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
            type="password"
            class="form-control"
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
        <div className="mt-3 text-center">
          <Link onClick={googleSignIn}>
            <FcGoogle className="fs-3 me-3"></FcGoogle>
          </Link>
          <Link onClick={gitHubSignIn}>
            <FaGithub className="fs-3 text-dark"></FaGithub>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
