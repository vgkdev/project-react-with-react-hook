import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalShowNewsDetail = (props) => {
  //console.log("check props Modal: ", props.data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.data.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h4>Content</h4>
        {props.data.content}
        <br />
        <a href={props.data.url} target="_blank">
          More...
        </a>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalShowNewsDetail;
