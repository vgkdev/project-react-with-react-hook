import React from "react";

import { NavLink } from "react-router-dom";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <div className="top-nav">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>

      <NavLink activeClassName="active" to="/todo-app">
        Todo App
      </NavLink>

      <NavLink activeClassName="active" to="/blog">
        Blog App
      </NavLink>

      <NavLink activeClassName="active" to="/covid-app">
        Covid App
      </NavLink>
    </div>
  );
};

export default NavigationBar;
