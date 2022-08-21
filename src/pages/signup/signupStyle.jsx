import styled from "styled-components";

export const SignupStyle = styled.div`
  margin-top: 10%;
  /* Coded with love by Mutiullah Samim */
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .container {
    margin-top: 10%;
  }
  .user_card {
    height: 400px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: ${(props) => {
      console.log("line20=>", props);
      return props.selectedTheme.text.bgColor;
    }};

    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: ${(props) => props.selectedTheme.bgColor};
    padding: 10px;
    text-align: center;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: ${(props) => props.selectedTheme.bgColor};
  }
  .form_container {
    margin-top: 20%;
  }
  .login_btn {
    width: 100%;
    background: ${(props) => props.selectedTheme.bgColor} !important;
    color: white !important;
  }
  .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .login_container {
    padding: 0 2rem;
  }
  .input-group-text {
    background: ${(props) => props.selectedTheme.bgColor} !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
    cursor: pointer;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::before {
    background-color: #c0392b !important;
  }
  .signupLink {
    outline: none;
    box-shadow: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.selectedTheme.link.color};
    padding: 0;
  }
  .signupwith {
    flex-direction: column;
    margin: 25% 0 5% 3%;
  }
  .signupOption {
    text-align: center;
    display: inline-flex;
  }
  p {
    margin: 0;
  }
  .disableClass {
    pointer-events: none;
    opacity: 0.4;
  }
`;
