import React from "react";
import Home from "../pages/home";
import Contact from "../pages/home";
export const AppConfig = {
  access: {},
  modules: [],
  content: {
    default: {
      htmlContent: (data) => {
        return <Home data={data} />;
      },
    },
    home: {
      htmlContent: (data) => {
        return <Home data={data} />;
      },
    },
    contact: {
      htmlContent: (data) => {
        return <Contact data={data} />;
      },
    },
    component: {
      htmlContent: (data) => {
        return <div>Component</div>;
      },
    },
    dashboard: {
      htmlContent: (data) => {
        return <div>Dashboard</div>;
      },
    },
  },
};
