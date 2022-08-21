import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from "../store/actions/auth";
import history from "../utils/constants";

import { AppEntryStyle } from "./appEntryStyle";
import brandLogo from "../assets/img/YLOGO.png";

function AppEntry(props) {
  const { loginAction, theme } = props;
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const selectedTheme = Object.values(theme).find(
    (item) => item.checked === true
  );
  console.log("login props", props, selectedTheme);

  return (
    <AppEntryStyle selectedTheme={selectedTheme}>
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src={brandLogo} className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              {/* <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input_user"
                  value={mobile}
                  placeholder="mobile"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div> */}
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-envelope-square"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input_pass"
                  value={email}
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  type="button"
                  name="button"
                  className="btn login_btn"
                  onClick={() => loginAction()}
                >
                  Get OTP
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <button
                onClick={() => history.push("/signup")}
                className="signupLink"
              >
                &nbsp;Sign Up
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <button onClick={() => history.push("/")} className="signupLink">
                &nbsp;Back to home
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppEntryStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return { loginAction: () => dispatch(login()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppEntry);
