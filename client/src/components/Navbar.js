import React, { useContext } from "react";
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
          <></>
          ) : (
            <button
              onClick={logout}
              className="btn btn-outline-light px-4 "
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
