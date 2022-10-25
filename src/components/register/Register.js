import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const Register = () => {
  const { registerUser, userProfileUpdate } = useContext(AuthContext);
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
          <Link to="/login">Already have an account?</Link>
        </p>
        <button type="submit" class="btn btn-primary">
          REGISTER
        </button>
        <div className="mt-3 text-center">
          <Link>
            <FaGoogle className="fs-3 me-3"></FaGoogle>
          </Link>
          <Link>
            <FaGithub className="fs-3"></FaGithub>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
