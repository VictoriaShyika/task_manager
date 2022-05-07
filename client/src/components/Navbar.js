import Button from "./UI/Button";
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
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : (
            <Button onClick={logout}>Logout</Button>
          )}
        </div>
      </div>
    </nav>
  );
}
