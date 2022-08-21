import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout";
function Modules(props) {
  return PageLayout({
    header: null,
    content: (
      <MainContact selectedTheme={props.theme.selected} {...props}>
        <h1>Modules Page</h1>
      </MainContact>
    ),
  });
}

export default Modules;

export const MainContact = styled.div`
  h1 {
    text-align: center;
  }
`;
