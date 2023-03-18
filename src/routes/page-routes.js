import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login";
import LoadingIndicator from "../loading-indicator";
import Home from "../home";
import BlogHome from "../blogs/blog-home";
import { UserAuthContextProvider } from "./firebase-auth-context";
import ProtectedRoute from "../utils/auth/protected-route";
import SpecialRoute from "../utils/auth/special-route";
import HomeNavbar from "../navbar/home-navbar";
function PageRoutes({ loading }) {
  return loading ? (
    <LoadingIndicator />
  ) : (
    <>
      <BrowserRouter>
        <UserAuthContextProvider>
          <HomeNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog">
              <Route index element={<BlogHome />} />
              <Route
                path="login"
                element={
                  <SpecialRoute>
                    <Login />
                  </SpecialRoute>
                }
              />
              <Route
                path="register"
                element={
                  <SpecialRoute>
                    <Login />
                  </SpecialRoute>
                }
              />
            </Route>
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </>
  );
}
export default PageRoutes;
