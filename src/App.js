import { Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import history from "./utils/constants";
import "./App.css";
import store from "./store/store";
import AppEntry from "./pages/appEntry";
import Home from "./pages/home";
import Contact from "./pages/contact";
import PrivateRoute from "./routeModule/private";
import PublicRoute from "./routeModule/public";
import Page from "./pages/page";

function App(props) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <PublicRoute
            restricted={true}
            component={AppEntry}
            path="/login"
            exact
          />
          <PrivateRoute component={Home} path="/" exact />
          <PrivateRoute component={Home} path="/home" exact />
          <PrivateRoute component={Contact} path="/contact" exact />
          <PrivateRoute component={Page} path="/page" exact />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
