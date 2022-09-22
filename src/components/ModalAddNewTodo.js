import React from "react";
import { Form } from "react-bootstrap";

const ModalAddNewTodo = (props) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Todo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name todo"
          onChange={(event) => props.handleOnChangeTodo(event)}
          value={props.todo}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="text"
          placeholder="Time"
          onChange={(event) => props.handleOnChangeTime(event)}
          value={props.time}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Date"
          onChange={(event) => props.handleOnChangeDate(event)}
          value={props.date}
        />
      </Form.Group>
    </Form>
  );
};

export default ModalAddNewTodo;
