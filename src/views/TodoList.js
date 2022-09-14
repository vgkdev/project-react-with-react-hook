import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./TodoList.scss";

let idList = 0;

const TodoList = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChangeTodo = (event) => {
    //console.log("check state todo", event.target.value);
    setTodo(event.target.value);
  };

  const handleOnChangeTime = (event) => {
    //console.log("check state time", event.target.value);
    setTime(event.target.value);
  };

  const handleOnChangeDate = (event) => {
    //console.log("check state date", event.target.value);
    setDate(event.target.value);
  };

  const handleAddNewTodo = () => {
    if (!todo || !time || !date) {
      alert("missing parameter");
      return;
    }

    let newTodo = {
      id: idList,
      todo: todo,
      time: time,
      date: date,
    };
    console.log("check newTodo: ", newTodo);
    idList++;
    setList([...list, newTodo]);
    console.log("check list: ", list);
    setTodo("");
    setTime("");
    setDate("");
    setShow(false);
  };

  return (
    <div className="todo-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Todo</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id + 1}</td>
                  <td>{item.todo}</td>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                </tr>
              );
            })}
          {list.length === 0 && (
            <tr>
              <td colSpan={4}></td>
            </tr>
          )}
        </tbody>
      </Table>

      <Button className="btn-add-new" onClick={handleShow}>
        Add new todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Todo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name todo"
                onChange={(event) => handleOnChangeTodo(event)}
                value={todo}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Time"
                onChange={(event) => handleOnChangeTime(event)}
                value={time}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Date"
                onChange={(event) => handleOnChangeDate(event)}
                value={date}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={(event) => handleAddNewTodo(event)}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoList;
