import axios from "axios";

import history from "../../utils/constants";
const TOKEN_KEY = "jwt";
const USER_DATA = "user";

export function login() {
  return function (dispatch) {
    dispatch({ type: "LOGIN_LOADING" });
    return axios.get("https://reqres.in/api/users/2").then(({ data }) => {
      console.log("line 188=>", data);
      const userData = {
        access: {
          read: true,
          add: false,
          edit: true,
          delete: false,
        },
        modules: [
          { name: "home", icon: "fa fa-home" },
          { name: "contact", icon: "fa fa-phone" },
          { name: "dashboard", icon: "fa fa-user" },
          { name: "component", icon: "fa fa-user" },
          { name: "customLeaflet", icon: "fa fa-user" },
        ],
      };
      alert("Logged in");
      localStorage.setItem(TOKEN_KEY, "TestLogin");
      localStorage.setItem(USER_DATA, JSON.stringify(userData));
      if (isLogin()) {
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });
        history.push("/");
      } else {
        history.push("/login");
      }
      // return userData;
    });
  };
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch({ type: "LOGOUT_SUCCESS" });
    history.push("/");
  };
  // return true;
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
export function signUp() {
  return function (dispatch) {
    dispatch({ type: "SIGNUP_LOADING" });
    return axios.get("https://reqres.in/api/users/2").then(({ data }) => {
      console.log("line 55=>", data);

      alert("Sign Up successfully");
      // localStorage.setItem(TOKEN_KEY, "TestLogin");
      // localStorage.setItem(USER_DATA, JSON.stringify(userData));
      if (data && data.status === 200) {
        dispatch({ type: "SIGNUP_SUCCESS", payload: {} });
        history.push("/login");
      } else {
        history.push("/signup");
      }
      // return userData;
    });
  };
}
