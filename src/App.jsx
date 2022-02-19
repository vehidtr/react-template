import "App.scss";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import NotFound from "pages/NotFound/NotFound";
import Login from "pages/Login/Login";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "utils/routes";
import Company from "pages/Company/Company";
import PublicRoutes from "components/PublicRoutes/PublicRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-content">
          <Routes>
            {routes.map((route, i) => {
              const key = `route-${i}`;
              if (route.protected) {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    element={
                      <PrivateRoute
                        isAuth={true}
                        path={route.path}
                        protect={route.protected}
                      >
                        <route.component />
                      </PrivateRoute>
                    }
                  />
                );
              } else {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    element={
                      <PublicRoutes
                        isAuth={true}
                        path={route.path}
                        protect={route.protected}
                      >
                        <route.component />
                      </PublicRoutes>
                    }
                  />
                );
              }
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
