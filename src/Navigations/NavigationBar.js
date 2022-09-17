import React from "react";

import { NavLink } from "react-router-dom";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <div className="top-nav">
      <NavLink to="/" exact="true">
        Home
      </NavLink>

      <NavLink to="/todo-app">Todo App</NavLink>

      <NavLink to="/news-app">News App</NavLink>

      <NavLink to="/blogs-app">Blog App</NavLink>
    </div>
  );
};

export default NavigationBar;
