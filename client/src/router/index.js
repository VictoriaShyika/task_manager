import Home from "../pages/Home";
import Login from "../pages/Login/Login";

export const privateRoutes = [
    { path: "/home", component: Home },
]

export const publicRoutes = [
    { path: "/login", component: Login },
]