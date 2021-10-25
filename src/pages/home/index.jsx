import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import yslogo from "../../assets/img/YLOGO.png";

import { PageLayout } from "../../layout";

function Home(props) {
  const params = useLocation();
  const { content } = params;

  console.log("Home line=>9", props, params, content);
  return PageLayout({
    header: null,
    content: (
      <HomeStyle
        theme={props.theme}
        themeNo={props.themeNo}
        {...props}
        id="summary"
        className="summary"
      >
        <img src={yslogo} alt="My Profile" />

        <div className="summaryData">
          <h2 className="summaryTitle">Intro</h2>
          <p>
            I’m a <b>Front-End</b> Developer with <b>5+</b> year of experience
            located in Pune India. I have a serious passion for UI effects,
            animations and creating intuitive, dynamic user experiences. <br />
            Well-organised person, problem solver, independent employee with
            high attention to detail. Interested in the entire frontend spectrum
            and working on ambitious projects with positive people.
            <br />
            <Link to={"/contact"}>Let’s make something special.</Link>
            <br />
          </p>
        </div>
        <div className="themeSelector"></div>
      </HomeStyle>
    ),
    ...props,
  });
}

export default Home;

export const HomeStyle = styled.div`
  height: auto;
  display: inline-flex;
  flex-direction: row;
  justify-content: start;
  margin: 20px;
  /* padding: 16px 20px; */
  text-align: justify;
  border-radius: 5px;
  /* box-shadow: 1px 2px 3px 0px red; */

  .componentSummary {
    display: flex;
    height: auto;
    margin: 10px;
    padding: 0px;
    text-align: justify;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 0px red;
  }
  .summaryData > p {
    margin: 0;
  }
  .summaryTitle {
    margin: 10px 0;
    text-transform: capitalize;
    color: ${(props) => {
      console.log("line68=>", props);
      return props.theme[props.themeNo].h2.color;
    }};
    text-align: left;
  }
  .summaryData {
    /* font-family: "ProximalNova"; */
    color: ${(props) => props.theme[props.themeNo].text.color};
    font-weight: normal;
    font-size: 4vh;
  }
  .summaryData > p > a {
    color: ${(props) => props.theme[props.themeNo].link.color};
    cursor: pointer;
  }
  img {
    border-radius: 50%;
    height: 300px;
    margin: 0 20px 0 0;
    float: left;
    background-color: ${(props) => props.theme[props.themeNo].bgColor};
  }
`;
