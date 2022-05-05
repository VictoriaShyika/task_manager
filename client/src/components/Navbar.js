import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    sessionStorage.removeItem("token");
  }

  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand text-uppercase fw-bold">
          Task Manager
        </span>
        <div className="ml-auto">
          {!isAuth ? (
            <>
              <Link to="/login" className="btn btn-outline-light px-4 mx-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-outline-light px-4 mx-2 ">
                Sign Up
              </Link>
            </>
          ) : (
            <button onClick={logout} className="btn btn-outline-light px-4 ">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
