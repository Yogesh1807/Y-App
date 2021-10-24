import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AppConfig } from "../utils/appConfig";
import Sidebar from "./sidebar";
let tempData = {};

export const PageLayout = (props) => {
  const [appData, setAppData] = useState({});
  const { userData } = props;

  useEffect(() => {
    if (!userData) {
      tempData = JSON.parse(localStorage.getItem("user", userData));
      let data = {
        ...AppConfig,
        access: tempData.access,
        modules: tempData.modules,
      };
      setAppData(data);
    } else {
      tempData = userData;
      let data = {
        ...AppConfig,
        access: tempData.access,
        modules: tempData.modules,
      };
      setAppData(data);
    }
  }, [userData]);

  console.log("Layout Data", userData, appData);

  return (
    <MainLayout>
      <Sidebar {...props} userData={appData} />
      <PageContent>{props.content}</PageContent>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.userData,
});

// const mapDispatchToProps = () => {};

connect(mapStateToProps)(PageLayout);
// export default PageLayout;
export const MainLayout = styled.div`
  width: 100%;
  background-color: aquamarine;
`;
export const PageContent = styled.div`
  float: right;
  width: 80%;

  /* background-color: red; */

  a:hover {
    text-decoration: none;
  }
`;
