import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const privateRoutes = [
    { path: "/home", component: Home },
]

export const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/signup", component: SignUp },

]