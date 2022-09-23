import React from "react";
import "./Home.scss";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "18rem", height: "18rem" }}
          variant="top"
          src="https://thumbs.dreamstime.com/b/to-do-list-icon-with-hand-drawn-text-checklist-task-list-vector-illustration-in-flat-style-on-white-background-96388031.jpg"
        />
        <Card.Body>
          <Card.Title>Todo App</Card.Title>
          <Card.Text>Create a simple to-do list.</Card.Text>
          <Button variant="primary" onClick={() => handleOnClick("/todo-app")}>
            Go
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "18rem", height: "18rem" }}
          variant="top"
          src="https://img.freepik.com/premium-vector/epidemic-breaking-news-mockup-coronavirus-newspaper-coronavirus-outbreak-newsletter-paper-page-mockup-daily-newspaper-news-related-covid-19_87561-473.jpg?w=2000"
        />
        <Card.Body>
          <Card.Title>News App</Card.Title>
          <Card.Text>Update the latest news.</Card.Text>
          <Button variant="primary" onClick={() => handleOnClick("/news-app")}>
            Go
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ width: "18rem", height: "18rem" }}
          variant="top"
          src="https://cdn.pixabay.com/photo/2014/06/19/21/36/blog-372771__340.jpg"
        />
        <Card.Body>
          <Card.Title>Blogs App</Card.Title>
          <Card.Text>Read and write Blogs.</Card.Text>
          <Button variant="primary" onClick={() => handleOnClick("/blogs-app")}>
            Go
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
