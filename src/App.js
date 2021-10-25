import React, { useState } from "react";
import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import history from "./utils/constants";
import { theme } from "./utils/themeconfig";
import store from "./store/store";
import AppEntry from "./pages/appEntry";
import Home from "./pages/home";
import Contact from "./pages/contact";
import PrivateRoute from "./routeModule/private";
import PublicRoute from "./routeModule/public";
import Page from "./pages/page";
// const theme = {
//   main: "mediumseagreen",
// };
function App(props) {
  const [themeNo, setThemeNo] = useState(1);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <PublicRoute
              themeNo={themeNo}
              theme={theme}
              restricted={true}
              component={AppEntry}
              path="/login"
              exact
            />
            <PrivateRoute
              setThemeNo={setThemeNo}
              themeNo={themeNo}
              theme={theme}
              component={Home}
              path="/"
              exact
            />
            <PrivateRoute
              setThemeNo={setThemeNo}
              themeNo={themeNo}
              theme={theme}
              component={Home}
              path="/home"
              exact
            />
            <PrivateRoute
              setThemeNo={setThemeNo}
              themeNo={themeNo}
              theme={theme}
              component={Contact}
              path="/contact"
              exact
            />
            <PrivateRoute
              setThemeNo={setThemeNo}
              themeNo={themeNo}
              theme={theme}
              component={Page}
              path="/page"
              exact
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
