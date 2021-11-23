import React from "react";
import PostForm from "./PostForm";

export default function Modal(props) {
  const { title } = props;
  return (
    <div className="modal">
          <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
            </div>
       
     

      <div className="modal-content">
        <PostForm />
      </div>
    </div>
  );
}
