import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand text-uppercase fw-bold">Task Manager</span>
        <div className="ml-auto">
          {!isAuth ? (
            <Link to="/login">
              <button className="btn btn-outline-light px-4">Login</button>
            </Link>
          ) : <button onClick={() => setIsAuth(false)} className="btn btn-outline-light px-4 ">Logout</button>}
        </div>
      </div>
    </nav>
  );
}
