import React from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import { logout } from "../store/actions/auth";

const SidebarStyle = styled.div`
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 20%;
  float: left;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;

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

  div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
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
  console.log("sidebar props", props);
  const { userData } = props;
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
        console.log("line79=>", userData.content[item]);
        const params = {
          //   pathname: `/${item}`,
          pathname: `/page`,
          content: userData.content[`${item}`],
        };
        return <Link to={params}>{item}</Link>;
      })
    );
  };
  return (
    <SidebarStyle>
      <button onClick={OnLogout}>Logout</button>
      {getMenus()}
      {/* <Link to={"/home"}>Home</Link>
      <Link to={"/contact"}>Contact</Link> */}

      {/* <a class="active" href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a> */}
    </SidebarStyle>
  );
}

export default Sidebar;
