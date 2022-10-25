import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
        <p>
          <Link to="/register">Create a new account?</Link>
        </p>
        <button type="submit" class="btn btn-primary">
          LOG IN
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

export default Login;
