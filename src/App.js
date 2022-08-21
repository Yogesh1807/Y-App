import React, { useState } from "react";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import history from "./utils/constants";
import { theme } from "./utils/themeconfig";
import store from "./store/store";
import AppEntry from "./pages/appEntry";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Contact from "./pages/contact";
import PrivateRoute from "./routeModule/private";
import PublicRoute from "./routeModule/public";
import Page from "./pages/page";
import Dashboard from "./pages/Dashboard";
import ComponentPage from "./pages/component";
import { CustomLeaflet } from "./pages/component/CustomLeaflet";
// const theme = {
//   main: "mediumseagreen",
// };
function App(props) {
  const themeData = {
    default: theme,
    selected: theme[1],
  };
  const [themeState, setThemeState] = useState(themeData);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeState}>
        <Router history={history}>
          <Switch>
            <PublicRoute
              theme={themeState}
              restricted={true}
              component={AppEntry}
              path="/login"
              exact
            />
            <PublicRoute
              theme={themeState}
              restricted={true}
              component={SignUp}
              path="/signup"
              exact
            />
            <PublicRoute
              setThemeState={setThemeState}
              theme={themeState}
              restricted={true}
              component={Home}
              path="/"
              exact
            />
            <PublicRoute
              setThemeState={setThemeState}
              theme={themeState}
              restricted={true}
              component={Home}
              path="/home"
              exact
            />
            <PublicRoute
              setThemeState={setThemeState}
              theme={themeState}
              restricted={true}
              component={Contact}
              path="/contact"
              exact
            />
            <PrivateRoute
              setThemeState={setThemeState}
              theme={themeState}
              component={Dashboard}
              path="/dashboard"
              exact
            />
            <PrivateRoute
              setThemeState={setThemeState}
              theme={themeState}
              component={ComponentPage}
              path="/component"
              exact
            />

            <PrivateRoute
              setThemeState={setThemeState}
              theme={themeState}
              component={CustomLeaflet}
              path="/customLeaflet"
              exact
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
