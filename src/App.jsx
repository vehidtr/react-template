import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "utils/routes";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoutes from "components/PublicRoutes/PublicRoutes";
import "App.scss";

function App() {
  const [isAuth, setisAuth] = useState(false);
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
                        isAuth={isAuth}
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
                        isAuth={isAuth}
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
