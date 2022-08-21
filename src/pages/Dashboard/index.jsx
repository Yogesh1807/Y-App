import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { PageLayout } from "../../layout";

function DashboardPage(props) {
  return PageLayout({
    header: null,
    content: (
      <MainContact selectedTheme={props.theme.selected} {...props}>
        <h1>Dashboard Page</h1>
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
const Dashboard = connect(mapStateToProps)(DashboardPage);
export default Dashboard;

export const MainContact = styled.div`
  h1 {
    text-align: center;
  }
`;
