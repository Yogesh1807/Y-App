import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { PageLayout } from "../../layout";
import profile from "../../assets/img/profile.png";
import yogiFULLprofile from "../../assets/img/yogiFULLprofile.png";

function ContactPage(props) {
  return PageLayout({
    header: null,
    content: (
      <MainContact selectedTheme={props.theme.selected} {...props}>
        <h1>Contact Page</h1>
        <img src={profile} alt="My Profile" />
        <img src={yogiFULLprofile} alt="My Profile" />
      </MainContact>
    ),
    ...props,
  });
}

const mapStateToProps = (state) => {
  console.log("line46", state);
  return {
    userData: state.userReducer.userData,
  };
};
const Contact = connect(mapStateToProps)(ContactPage);
export default Contact;

export const MainContact = styled.div`
  h1 {
    text-align: center;
  }
`;
