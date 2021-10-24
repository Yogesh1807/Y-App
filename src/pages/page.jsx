import React from "react";
import { useLocation } from "react-router-dom";
// import styled from "styled-components";
import { PageLayout } from "../layout";

function Page(props) {
  const params = useLocation();
  const { content } = params;
  console.log("page line=>9", props, params, content);
  if (content) {
    return PageLayout({
      header: null,
      content: content.htmlContent(),
    });
  } else {
    return <pre>{JSON.stringify(params)}</pre>;
  }
}

export default Page;
