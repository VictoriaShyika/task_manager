import Button from "./UI/Button";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import Brand from "./UI/Brand";

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
              <Button style={{ border: "none" }} onClick={addTaskToggler}>
                Add New Task
              </Button>
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
