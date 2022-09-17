import React from "react";
import { useParams } from "react-router-dom";

const DetailNews = () => {
  let { id } = useParams();
  return <div>DetailNews id: {id}</div>;
};

export default DetailNews;
