import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout";
function Contact(props) {
  return PageLayout({
    header: null,
    content: (
      <MainContact selectedTheme={props.theme.selected} {...props}>
        <h1>Contact Page</h1>
      </MainContact>
    ),
  });
}

export default Contact;

export const MainContact = styled.div`
  h1 {
    text-align: center;
  }
`;
