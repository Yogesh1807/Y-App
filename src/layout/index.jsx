import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AppConfig } from "../utils/appConfig";
import Sidebar from "./sidebar";
let tempData = {};

export const PageLayout = (props) => {
  const [appData, setAppData] = useState({});
  const [collapse, setCollapse] = useState(true);
  const { userData, content } = props;
  const { theme, themeNo } = content.props;
  console.log("layout props", props, theme, themeNo);
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

  console.log("Layout Data", appData, theme[themeNo].bgColor);

  return (
    <MainLayout themeNo={themeNo}>
      <Sidebar
        {...props}
        themeNo={themeNo}
        collapse={collapse}
        setCollapse={setCollapse}
        userData={appData}
      />
      <PageContent themeNo={themeNo} {...props} collapse={collapse}>
        {props.content}
      </PageContent>
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
  width: ${(props) => (props.collapse ? "95%" : "80%")};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  background-color: ${(props) => props.theme[props.themeNo].text.bgColor};

  a:hover {
    text-decoration: none;
  }
`;
