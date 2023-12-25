import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { PageLayout } from "../../layout";

function ComponentPageContent(props) {
  console.log("component page", props);

  return PageLayout({
    header: null,
    content: (
      <MainContact selectedTheme={props.theme.selected} {...props}>
        <h1 className="pageTitle">Component List </h1>
        <ul class="list-group listStyle">
          <Link to="/customLeaflet">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <span style={{ padding: "0 15px" }}>
                Custom Features Using Leaflet
              </span>

              <div class="image-parent">
                <img
                  src="https://miro.medium.com/max/2000/0*fMz62Ks_u0QvVQ1E.png"
                  class="img-fluid"
                  alt="quixote"
                />
              </div>
            </li>
          </Link>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            As I Lay Dying
            <div class="image-parent">
              <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/as_I_lay.jpg"
                class="img-fluid"
                alt="lay"
              />
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Things Fall Apart
            <div class="image-parent">
              <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/things_fall_apart.jpg"
                class="img-fluid"
                alt="things"
              />
            </div>
          </li>
        </ul>
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
const ComponentPage = connect(mapStateToProps)(ComponentPageContent);
export default ComponentPage;

export const MainContact = styled.div`
  h1 {
    text-align: center;
  }
  .pageTitle {
    background-color: ${(props) => props.selectedTheme.bgColor};
    color: white;
    padding: 20px;
    margin: 0 0 0.2rem 0;
    /* border:  ${(props) =>
      `0.4rem solid ${props.selectedTheme.icon.color}`}; */
    /* border-radius: 0.2rem; */
    opacity: 0.8;
}
  .listStyle{
  padding: 10px;
}
  .image-parent {
    max-width: 40px;
  }
  .summary {
    background-color: ${(props) => props.selectedTheme.text.bgColor};
    height: auto;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: start;
    padding: 20px;
    /* padding: 16px 20px; */
    text-align: justify;
    /* border-radius: 5px; */
    /* box-shadow: 1px 2px 3px 0px red; */
  }
  .summaryData > p {
    margin: 0;
  }
  .summaryTitle {
    margin: 10px 0;
    text-transform: capitalize;
    color: ${(props) => {
      console.log("line68=>", props);
      return props.selectedTheme.h2.color;
    }};
    text-align: left;
  }
  .summaryData {
    /* font-family: "ProximalNova"; */
    color: ${(props) => props.selectedTheme.text.color};
    font-weight: normal;
    font-size: 4vh;
  }
  .summaryData > p > a {
    color: ${(props) => props.selectedTheme.link.color};
    cursor: pointer;
  }
  /* img {
    border-radius: 50%;
    height: 300px;
    margin: 0 20px 0 0;
    float: left;
    background-color: ${(props) => props.selectedTheme.bgColor};
  } */
  .themeSelector {
    display: flex;
    padding: 10px;
    height: 100%;
  }
  .color1 {
    color: #1f0202;
    height: calc(100vh / 3);
    border-radius: 50%;
    width: 100%;
    margin: 10px;
    text-align: center;
    padding: 20px;
    cursor: pointer;
  }
  .color2 {
    color: #1f0202;
    height: 100%;
    border-radius: 50%;
    width: 100%;
    text-align: center;
    padding: 20px;
    cursor: pointer;
  }
  .color1:hover {
    color: white;
  }
  #Theme1 {
    box-sizing: border-box;
    padding: 151px;
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  input[type="radio" i] {
    border: 0;
  }
  input[type="radio"]:checked {
    background-color: #93e026;
  }
`;
