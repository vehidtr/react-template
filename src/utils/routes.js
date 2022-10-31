/* const Login = lazy(async () => await import("pages/Login/Login")); */
import Login from "pages/Login/Login";
import NotFound from "pages/NotFound/NotFound";
import Home from "pages/Home/Home";

export const routes = [
  {
    path: "*",
    name: "NotFound",
    exact: false,
    component: NotFound,
    protected: true,
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    component: Login,
    protected: false,
  },
  {
    path: "/",
    name: "Home",
    exact: true,
    component: Home,
    protected: true,
  },
];

export default routes;
