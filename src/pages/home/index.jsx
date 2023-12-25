import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import update from "immutability-helper";
import { connect } from "react-redux";
import yslogo from "../../assets/img/YLOGO.png";


import { PageLayout } from "../../layout";

function HomePage(props) {
  const params = useLocation();
  const { content } = params;
  const { setThemeState, theme } = props;

  const onThemeChange = (e) => {
    console.log("onThemeChange", e.target.value, e.target.checked);
    let temp = {};

    if (e.target.checked) {
      theme.default[e.target.value].checked = e.target.checked;
      temp = update(theme, {
        $merge: { selected: theme.default[e.target.value] },
      });
    } else {
      theme.default[e.target.value].checked = e.target.checked;
      temp = update(theme, {
        $merge: { selected: {} },
      });
    }
    setThemeState(temp);
  };
  const selectedTheme = theme.selected;
  // Object.values(theme).find((item) => item.checked === true);
  console.log("Home line=>9", props, params, content, selectedTheme);

  return PageLayout({
    header: null,
    content: (
      <HomeStyle selectedTheme={selectedTheme}>
        <div id="summary" className="summary">
          <img src={yslogo} alt="My Profile" />

          <div className="summaryData">
            <h2 className="summaryTitle">Intro</h2>
            <p>
              I’m a <b>Front-End</b> Developer with <b>5+</b> year of experience
              located in Pune India. I have a serious passion for UI effects,
              animations and creating intuitive, dynamic user experiences.{" "}
              <br />
              Well-organised person, problem solver, independent employee with
              high attention to detail. Interested in the entire frontend
              spectrum and working on ambitious projects with positive people.
              <br />
              <Link to={"/contact"}>Let’s make something special.</Link>
              <br />
            </p>
          </div>
        </div>
        <div className="themeSelector">
          {Object.keys(theme.default).length > 0 &&
            Object.keys(theme.default).map((item) => {
              return (
                <div key={item} style={{ textAlign: "center", width: "100%" }}>
                  <div
                    className="color1"
                    style={{ backgroundColor: theme.default[item].bgColor }}
                  >
                    <div
                      className="color2"
                      style={{
                        backgroundColor: theme.default[item].text.bgColor,
                      }}
                    >
                      <input
                        style={{
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                        onChange={(e) => {
                          onThemeChange(e);
                        }}
                        checked={
                          theme.selected.name === theme.default[item].name
                        }
                        type="radio"
                        value={item}
                      />
                       
                    </div>
                  </div>
                  <label htmlFor="html">{theme.default[item].name}</label>
                </div>
              );
            })}
        </div>
        <div>
          <h1>Slider Component</h1>
        </div>
      </HomeStyle>
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

// const mapDispatchToProps = () => {};

const Home = connect(mapStateToProps)(HomePage);
export default Home;

export const HomeStyle = styled.div`
  .summary {
    background-color: ${(props) => props.selectedTheme.text.bgColor};
    height: auto;
    display: inline-flex;
    flex-direction: row;
    justify-content: start;
    padding: 20px;
    /* padding: 16px 20px; */
    text-align: justify;
    /* border-radius: 5px; */
    /* box-shadow: 1px 2px 3px 0px red; */
  }
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
  img {
    border-radius: 50%;
    height: 300px;
    margin: 0 20px 0 0;
    float: left;
    background-color: ${(props) => props.selectedTheme.bgColor};
  }
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
