import React from "react";
import styled from "styled-components";
import OtpInput from "react-otp-input";

export function ModalComponent(props) {
  const { setTOggleModal, isToggleModal, otp, setOtp, submitOTP } = props;

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <MainContact
      //   selectedTheme={props.theme.selected}
      //   {...props}
      className="modal"
      id="form"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title" id="exampleModalLabel">
              Enter OTP
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => setTOggleModal(!isToggleModal)}
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div className="modal-body">
              <div className="form-group">
                <OtpInput
                  className="otpInput"
                  value={otp}
                  onChange={handleChange}
                  numInputs={4}
                  separator={<span>-</span>}
                />
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-center">
              <button
                onClick={() => submitOTP()}
                type="button"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainContact>
  );
}

export const MainContact = styled.div`
  background-color: #000000bd;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  /* display: none; */
  overflow: hidden;
  outline: 0;

  h1 {
    text-align: center;
  }
  .modal-dialog {
    max-width: 300px;
  }

  #emailOTP {
    padding-left: 15px;
    letter-spacing: 42px;
    border: 0;
    background-image: linear-gradient(
      to left,
      black 70%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 50px 1px;
    background-repeat: repeat-x;
    background-position-x: 35px;
    width: 220px;
    min-width: 220px;
  }

  #divInner {
    left: 0;
    position: sticky;
  }

  #divOuter {
    width: 190px;
    overflow: hidden;
  }
  .otpInput {
    width: 25%;
    flex-wrap: nowrap;
  }
  .otpInput > input {
    width: 100% !important;
    font-size: 20px;
  }
`;
