import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../store/actions/auth";
import { svgIcons } from "../utils/svgicon";

const SidebarStyle = styled.div`
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: ${(props) => (props.collapse ? "5%" : "20%")};
  float: left;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow-y: ${(props) => (props.collapse ? "none" : "auto")};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  button {
    cursor: pointer;
  }
  a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    text-transform: capitalize;
  }

  a.active {
    background-color: #04aa6d;
    color: white;
  }

  a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
  .icon-bar {
    background-color: #555;
  }

  .icon-bar a {
    padding: 10px;
    transition: all 0.3s ease;
    color: rgb(255, 255, 255);
    font-size: 20px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-bottom: 1px solid black;
    display: flex;
    place-content: ${(props) => (props.collapse ? "center" : "flex-start")};
    transition: 0.4s;
  }

  .icon-bar a:hover {
    background-color: #000;
  }

  .active {
    background-color: #04aa6d;
  }

  div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
  }
  .actionBtnList {
    position: absolute;
    bottom: 0px;
    left: 0;
    list-style: none;
    padding: 0;
    font-size: 25px;
    /* text-align: center; */
    border: 0;
    cursor: pointer;
    margin: 0;
    width: 100%;
    display: ${(props) => (props.collapse ? "block" : "flex")};
  }
  .actionBtnList li {
    /* margin: 10px 0; */
    /* border-top: 1px solid black;
    border-left: 1px solid black; */
    border: 0;
  }
  .logoutBtn {
    border: 0;
    background-color: transparent;
    color: #1f0202;
    transition: 1s;
    width: 100%;
  }
  .collapseBtn {
    border: 0;
    background-color: transparent;
    color: #1f0202;
    transition: 1s;
    width: 100%;
  }
  button:focus {
    outline: 0px auto -webkit-focus-ring-color;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: auto;
    position: relative;

    a {
      float: left;
    }
    div.content {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 400px) {
    a {
      text-align: center;
      float: none;
    }
  }
`;

function Sidebar(props) {
  const history = useHistory();
  //   const params = useParams();
  console.log("sidebar props", props, svgIcons);
  const { userData, setCollapse, collapse } = props;
  const OnLogout = () => {
    if (logout()) {
      history.push("/login");
    } else {
      history.push("/");
    }
  };
  const getMenus = () => {
    return (
      Object.keys(userData).length > 0 &&
      userData.modules.length > 0 &&
      userData.modules.map((item) => {
        console.log("line79=>", userData.content[item.name]);
        const params = {
          pathname: `/${item.name}`,
          //   pathname: `/page`,
          content: userData.content[`${item.name}`],
        };
        return (
          <Link title={item.name} to={params} key={item.name}>
            {collapse ? (
              <span style={{ padding: "0 15px" }}>{svgIcons[item.name]()}</span>
            ) : (
              <>
                <span style={{ padding: "0 15px" }}>
                  {svgIcons[item.name]()}
                </span>
                <span style={{ padding: "0 15px" }}>{item.name}</span>
              </>
            )}
          </Link>
        );
      })
    );
  };
  return (
    <SidebarStyle collapse={collapse}>
      <div className="icon-bar">{getMenus()}</div>
      <ul className="actionBtnList">
        <li>
          <button
            title="Logout"
            onClick={() => OnLogout()}
            className="logoutBtn"
          >
            {collapse ? (
              <span>{svgIcons["logout"]()}</span>
            ) : (
              <>
                <span>{svgIcons["logout"]()}</span>
                <span>Logout</span>
              </>
            )}
          </button>
        </li>
        <li>
          <button
            title="Collapse"
            className="collapseBtn"
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? (
              <span>{svgIcons["collapse"]()}</span>
            ) : (
              <>
                <span>{svgIcons["collapse"]()}</span>
                <span>Collapse</span>
              </>
            )}
          </button>
        </li>
      </ul>
    </SidebarStyle>
  );
}

export default Sidebar;
