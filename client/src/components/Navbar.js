import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
//   const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-uppercase fw-bold">Task Manager</a>
        {/* <div className="ml-auto">{!isAuth ? <Link to="/login" /> : <Link />}</div> */}
      </div>
    </nav>
  );
}
