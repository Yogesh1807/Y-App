import React from "react";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Component from "../pages/component";
import { CustomLeaflet } from "../pages/component/CustomLeaflet";
export const AppConfig = {
  access: {
    read: true,
    add: false,
    edit: false,
    delete: false,
  },
  modules: [
    { name: "home", icon: "fa fa-home" },
    { name: "contact", icon: "fa fa-phone" },
  ],
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
        return <Component data={data} />;
      },
    },
    customLeaflet: {
      htmlContent: (data) => {
        return <CustomLeaflet data={data} />;
      },
    },
    dashboard: {
      htmlContent: (data) => {
        return <div>Dashboard</div>;
      },
    },
  },
};
