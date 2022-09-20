import axios from "axios";
import React, { useState } from "react";
import "./ModalAddNewBlog.scss";

const ModalAddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    //console.log("check title: ", event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
    //console.log("check content: ", event.target.value);
  };

  const handleOnClick = async () => {
    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    try {
      let response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );

      if (response && response.data) {
        let newBlog = response.data;
        props.handleAddNewBlog(newBlog);
        console.log("check new blog: ", newBlog);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-new-container">
      <div className="input-container">
        <label>Title</label>
        <input
          className="input"
          placeholder="Enter title"
          value={title}
          onChange={onChangeTitle}
        />
      </div>

      <div className="input-container">
        <label>Content</label>
        <textarea
          className="input input-content"
          placeholder="Enter content"
          value={content}
          onChange={onChangeContent}
        />
      </div>

      <div className="btn-container">
        <button onClick={handleOnClick}>Add</button>
      </div>
    </div>
  );
};

export default ModalAddNewBlog;
