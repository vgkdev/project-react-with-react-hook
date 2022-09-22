import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalAddNewTodo from "../components/ModalAddNewTodo";

import "./TodoList.scss";

let idList = 0;
let idEdit = 0;

const TodoList = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [show, setShow] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowModalEdit(false);
  const handleShow = () => {
    setTodo("");
    setTime("");
    setDate("");
    setShow(true);
  };

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
    //console.log("check newTodo: ", newTodo);
    idList++;
    setList([...list, newTodo]);
    //console.log("check list: ", list);
    setTodo("");
    setTime("");
    setDate("");
    setShow(false);
  };

  const handleEditTodo = () => {
    if (!todo || !time || !date) {
      alert("missing parameter");
      return;
    }

    let tempList = list;
    tempList[idEdit].todo = todo;
    tempList[idEdit].time = time;
    tempList[idEdit].date = date;

    setList(tempList);
    setTodo("");
    setTime("");
    setDate("");
    setShowModalEdit(false);
  };

  const deleteTodo = (id) => {
    let tempList = list;
    tempList = tempList.filter((item) => item.id !== id);
    setList(tempList);
  };

  const handleOnClickEditTodo = (item) => {
    setTodo(item.todo);
    setTime(item.time);
    setDate(item.date);
    idEdit = item.id;
    //console.log("check item: ", list[idEdit]);
    setShowModalEdit(true);
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
            <th>Option</th>
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
                  <td>
                    <Button
                      style={{ marginRight: "10px" }}
                      variant="danger"
                      onClick={() => deleteTodo(item.id)}
                    >
                      Delete
                    </Button>

                    <Button
                      variant="warning"
                      onClick={() => handleOnClickEditTodo(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              );
            })}
          {list.length === 0 && (
            <tr>
              <td colSpan={5}></td>
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
          {/* <Form>
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
          </Form> */}
          <ModalAddNewTodo
            handleOnChangeTodo={handleOnChangeTodo}
            handleOnChangeTime={handleOnChangeTime}
            handleOnChangeDate={handleOnChangeDate}
            date={date}
            time={time}
            todo={todo}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={handleAddNewTodo}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ModalAddNewTodo
            handleOnChangeTodo={handleOnChangeTodo}
            handleOnChangeTime={handleOnChangeTime}
            handleOnChangeDate={handleOnChangeDate}
            date={date}
            time={time}
            todo={todo}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button
            style={{ width: "100px" }}
            variant="primary"
            onClick={handleEditTodo}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoList;
