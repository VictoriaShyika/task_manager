import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loader</div>;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
export default AppRouter;

