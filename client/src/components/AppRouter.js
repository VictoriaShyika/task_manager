import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import Home from "../pages/Home";
import { Login } from "../pages/Login/Login";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loader</div>;
  }
  return isAuth ? (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
export default AppRouter;
