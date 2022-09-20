import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Modal, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import ModalAddNewBlog from "../components/ModalAddNewBlog";
import "./Blogs.scss";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        //console.log("check response: ", response.data);
        let data = response && response.data ? response.data : [];
        if (data && data.length > 0) {
          let takeData = data.slice(0, 9);
          setData(takeData);
        }

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

  const handleOnClick = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleAddNewBlog = (blog) => {
    let tempData = data;
    tempData.unshift(blog);
    setShow(false);
    setData(tempData);
  };

  return (
    <div className="blogs-container">
      <h2>Blogs Page</h2>

      <div className="btn-add-new">
        <Button
          variant="primary"
          style={{ width: "200px" }}
          onClick={handleOnClick}
        >
          + Add new blog
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalAddNewBlog handleAddNewBlog={handleAddNewBlog} />
        </Modal.Body>
      </Modal>

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
