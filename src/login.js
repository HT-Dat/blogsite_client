import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "./assets/login-left.jpg";
import glogo from "./assets/google.svg";
import HomeNavbar from "./navbar/home-navbar";
import { useUserAuth } from "./routes/firebase-auth-context";
import customFetch from "./utils/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, logOut, user } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      // let response = await customFetch.get("/api/auth/verify-access");
      // let responseMessage = response.data;
      // switch (responseMessage.status) {
      //   case "unregistered":
      //     logOut();
      //     break;
      //   case "registered":
      //     navigate("/");
      //     break;
      // }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <div
        className="h-full flex-row md:grid grid-cols-5 bg-no-repeat bg-cover text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="col-span-3 bg-yellow-300/75 hidden md:inline-block	"></div>
        <div className="col-span-2 h-full grid place-items-center bg-white">
          <div className="w-2/3">
            <div>
              <div className="text-2xl font-bold">Welcome Back!</div>
              <div className="text-gray-600 pt-2 text">
                Please sign in to your account
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid place-items-start pt-10">
                <div className="w-full bg-gradient-to-t from-black/25 via-transparent rounded-full h-12 p-px">
                  <input
                    type="text"
                    className="w-full h-full border-none rounded-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                  />
                </div>
              </div>
              <div className="grid place-items-start mt-5">
                <div className="w-full bg-gradient-to-t from-black/25 via-transparent rounded-full h-12 p-px">
                  <input
                    type="password"
                    className="w-full h-full border-none rounded-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="flex justify-between pt-3">
                <div className="flex justify-start gap-3">
                  <input
                    type="checkbox"
                    className="place-self-center rounded text-yellow-500 form-checkbox"
                  ></input>
                  <div>Remember me</div>
                </div>
                <div>
                  <Link to="/reset">Forgot your password?</Link>
                </div>
              </div>
              <button
                type="submit"
                className="text-lg w-full pt-4 pb-4 mt-10 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sign in
              </button>
            </form>
            <br />
            <div className="mt-3 mb-5">
              Don't have an account?
              <Link to="/register" className="text-blue-600">
                Register now.
              </Link>
            </div>
            <div className="flex justify-center items-center h-10">
              <hr className="w-10" />
              <div className="text-gray-400">or continute with</div>
              <hr className="w-10" />
            </div>
            <div
              className="flex justify-center items-center cursor-pointer px-12 py-3 mt-5 font-semibold text-gray-900 bg-white border-2 border-gray-500 rounded-full shadow outline-none hover:bg-blue-50 hover:border-blue-400 hover:shadow-2xl focus:outline-none"
              // onClick={signInWithGoogle}
            >
              <img src={glogo} />
              <p className="pl-5">Sign in with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
