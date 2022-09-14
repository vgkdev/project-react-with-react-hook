import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import TodoList from "../views/TodoList";
import NavigationBar from "./NavigationBar";

const Navigator = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/todo-app" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
