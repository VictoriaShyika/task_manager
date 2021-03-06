import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [addTask, setAddTask] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, isLoading, addTask, setAddTask }}
      >
        <Navbar />
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
