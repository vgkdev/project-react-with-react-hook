import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import "./Blogs.scss";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        console.log("check response: ", response.data);

        setData(response.data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div className="container">
      <h2>Blogs Page</h2>

      <div className="btn-add-new">
        <Button variant="primary" style={{ width: "200px" }}>
          + Add new blog
        </Button>
      </div>

      <div className="container-card">
        {isLoading === false &&
          isError === false &&
          data.map((item) => {
            return (
              <Card key={item.id} className="card">
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">{item.body}</Card.Text>
                  <Card.Text></Card.Text>

                  <Button variant="primary">More</Button>
                </Card.Body>
              </Card>
            );
          })}

        {isLoading && (
          <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
