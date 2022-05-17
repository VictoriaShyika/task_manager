import Button from "./UI/Button";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import Brand from "./UI/Brand";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
  const { isAuth, setIsAuth, addTask, setAddTask } = useContext(AuthContext);

  function logout() {
    setIsAuth(false);
    sessionStorage.removeItem("token");
  }

  const addTaskToggler = () => {
    setAddTask(!addTask);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        {!isAuth ? (
          <>
            <Brand />
            <div className="navbar-nav">
              <div className="ml-auto d-flex ">
                <Link to="/login" className="mx-2">
                  <Button>Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="justify-content-start">
              <Brand />
              <button
                className={`btn ${
                  addTask ? "active_btn " : "text-white border-white"
                }`}
                onClick={addTaskToggler}
              >
                <span>
                  <i className="bi bi-plus" style={{ fontSize: "1.1rem" }}></i>
                </span>
                Task
              </button>
            </div>

            <div className="dropdown">
              <button
                className="btn text-white dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Tasks
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuDark"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My Tasks
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    All Tasks
                  </a>
                </li>
              </ul>
            </div>

            <div className="justify-content-end">
              <Button onClick={logout}>Logout</Button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
