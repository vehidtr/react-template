import { lazy } from "react";
/* const Login = lazy(async () => await import("pages/Login/Login")); */
import Login from "pages/Login/Login";
import NotFound from "pages/NotFound/NotFound";
import Company from "pages/Company/Company";

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
    path: "/company",
    name: "Company",
    exact: true,
    component: Company,
    protected: true,
  },
];

export default routes;
