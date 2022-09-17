import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import TodoList from "../views/TodoList";
import NavigationBar from "./NavigationBar";
import News from "../views/News";
import Blogs from "../views/Blogs";
//import DetailNews from "../views/DetailNews";

const Navigator = () => {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" exact="true" element={<Home />} />

        <Route path="/todo-app" element={<TodoList />} />

        <Route path="/news-app" element={<News />} />

        <Route path="/blogs-app" element={<Blogs />} />

        {/* <Route path="/news-app/:id" element={<DetailNews />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Navigator;
