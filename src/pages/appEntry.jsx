import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from "../store/actions/auth";
import "./appEntry.css";
import brandLogo from "../assets/img/YLOGO.png";

function AppEntry(props) {
  const { loginAction } = props;
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src={brandLogo} className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="input-group mb-3">
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
              </div>
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
              Don't have an account? <a className="ml-2">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return { loginAction: () => dispatch(login()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppEntry);
