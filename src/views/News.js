import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment/moment";
import "./News.scss";
// import { Link } from "react-router-dom";
import ModalShowNewsDetail from "../components/ModalShowNewsDetail";

const News = () => {
  //console.log(moment(new Date()).subtract(31, "day").format("YYYY-MM-DD"));
  const priorDate = moment(new Date()).subtract(31, "day").format("YYYY-MM-DD");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [newsData, setNewsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&from=${priorDate}&sortBy=publishedAt&apiKey=0e1962a0648542a6b576de88d3c6bd6a`
        );

        //console.log("check response: ", response.data.articles[0]);

        setData(response.data.articles);
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
  }, [priorDate]);

  let id = 1;

  const handleOnClick = (item) => {
    setModalShow(true);
    setNewsData(item);
    //console.log("check item: ", newsData);
  };

  return (
    <div className="news-container">
      <h2>News app page</h2>
      <br />

      <div className="container-card">
        {isLoading === false &&
          isError === false &&
          data.map((item) => {
            return (
              <Card key={id++} className="card">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={item.urlToImage}
                  alt="Image"
                />
                <Card.Body>
                  <Card.Title className="card-title">{item.title}</Card.Title>
                  <Card.Text className="card-text">
                    {item.description}
                  </Card.Text>
                  <Card.Text>
                    {moment(item.publishedAt).utc().format("HH:mm DD-MM-YYYY")}
                  </Card.Text>

                  <Button variant="primary" onClick={() => handleOnClick(item)}>
                    {/* <Link
                      className="btn-link"
                      to={`/news-app/${id}`}
                      target="_blank"
                    >
                      More
                    </Link> */}
                    More
                  </Button>
                </Card.Body>

                <Card.Footer>
                  <Card.Text className="card-text">
                    Author: {item.author}
                  </Card.Text>
                </Card.Footer>
              </Card>
            );
          })}

        {/* {console.log("check NewsData: ", newsData)} */}
        <ModalShowNewsDetail
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={newsData}
        />

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

export default News;
