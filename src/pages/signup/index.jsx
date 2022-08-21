import React, { useState } from "react";
import { connect } from "react-redux";

import { signUp } from "../../store/actions/auth";
import { SignupStyle } from "./signupStyle";
import brandLogo from "../../assets/img/YLOGO.png";
import history from "../../utils/constants";
import { ModalComponent } from "../../components/Modal";
import { LabelCheckbox } from "../../components/labelCheckbox";

let temp = {};

function SignUp(props) {
  const { theme } = props;
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isToggleModal, setTOggleModal] = useState(false);
  const [mobileOtp, setMobileOtp] = useState(null);
  const [emailOtp, setEmailOtp] = useState(null);
  const [otp, setOtp] = useState(null);
  const [otpType, setOtpType] = useState(null);
  const [signupType, setSignupType] = useState({});

  const selectedTheme = Object.values(theme).find(
    (item) => item.checked === true
  );
  console.log("SignUp props", props, selectedTheme);
  const confirmSignup = () => {
    // signUpAction();
    // setTOggleModal(!isToggleModal);
  };
  const verifyOTP = (type) => {
    // setEmailOtp(null);
    // setMobileOtp(null);
    setOtpType(type);
    setTOggleModal(!isToggleModal);
  };

  const submitOTP = () => {
    // alert(otp);
    setTOggleModal(!isToggleModal);
    if (otpType === "email") {
      setEmailOtp(otp);
    } else if (otpType === "mobile") {
      setMobileOtp(otp);
    }

    // setOtp(null);
  };

  const handleChange = (e) => {
    console.log(e.target.checked, e.target.value);
    temp[e.target.value] = e.target.checked;
    setSignupType({ ...temp });
    console.log("signupType54=>", temp);
  };

  console.log("line58=>", signupType);
  return (
    <SignupStyle selectedTheme={selectedTheme}>
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src={brandLogo} className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center signupwith">
            <p>Sign up with</p>
            <div className="signupOption">
              <LabelCheckbox
                labelText="email"
                bgColor={selectedTheme.bgColor}
                handleOnChange={(e) => {
                  console.log(e.target.value);
                  handleChange(e);
                }}
              />
              <LabelCheckbox
                labelText="mobile"
                bgColor={selectedTheme.bgColor}
                handleOnChange={(e) => {
                  console.log(e.target.value);
                  handleChange(e);
                }}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <form>
              <div
                className={
                  signupType && signupType.mobile
                    ? "input-group mb-4"
                    : "input-group mb-4 disableClass"
                }
              >
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
                <div className="input-group-append">
                  {mobileOtp === null && (
                    <button
                      onClick={() => verifyOTP("mobile")}
                      className="btn btn-success"
                      type="button"
                    >
                      Verify
                    </button>
                  )}
                  {mobileOtp !== null && (
                    <span
                      title="Mobile Verified"
                      className="input-group-text btn-success"
                    >
                      <i className="fas fa-check"></i>
                    </span>
                  )}
                </div>
              </div>
              <div
                className={
                  signupType && signupType.email
                    ? "input-group mb-2"
                    : "input-group mb-2 disableClass"
                }
              >
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
                <div className="input-group-append">
                  {emailOtp === null && (
                    <button
                      onClick={() => verifyOTP("email")}
                      className="btn"
                      type="button"
                    >
                      Verify
                    </button>
                  )}
                  {emailOtp !== null && (
                    <span
                      title="Email Verified"
                      className="input-group-text btn-success"
                    >
                      <i className="fas fa-check"></i>
                    </span>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  type="button"
                  name="button"
                  className="btn login_btn"
                  onClick={() => confirmSignup()}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Alredy have an account?
              <button
                onClick={() => history.push("/login")}
                className="signupLink"
              >
                &nbsp;Login
              </button>
            </div>
          </div>
        </div>
      </div>
      {isToggleModal && (
        <ModalComponent
          isToggleModal={isToggleModal}
          setTOggleModal={setTOggleModal}
          otp={otp}
          setOtp={setOtp}
          submitOTP={submitOTP}
        />
      )}
    </SignupStyle>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return { signUpAction: () => dispatch(signUp()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
