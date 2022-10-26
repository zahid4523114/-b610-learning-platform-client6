import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const Register = () => {
  const {
    registerUser,
    userProfileUpdate,
    signInWithGoogle,
    signInWithGitHub,
  } = useContext(AuthContext);
  const [error, setError] = useState();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(email, password, name, photo);
    //
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        handleUserProfile(name, photo);
        console.log(user);
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
      });
  };
  //update user profile passing pera meter:
  const handleUserProfile = (displayName, photoURL) => {
    const userData = { displayName, photoURL };
    userProfileUpdate(userData)
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log(error);
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
    <form onSubmit={handleRegister}>
      <div className="w-75 mx-auto my-5 shadow-lg p-4 rounded-2">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full Name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="User name"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Photo Url
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Url"
            name="photo"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
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
          <Link to="/login">Already have an account?</Link>
        </p>
        <button type="submit" class="btn btn-primary">
          REGISTER
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

export default Register;
