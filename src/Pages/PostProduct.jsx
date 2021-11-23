import React from "react";
import BackNav from "../Components/BackNav";
import Modal from "../Components/Modal";

export default function PostProduct() {
  return (
    <div className="page">
      <BackNav />

      <div className="page-content">
        <Modal title="Post your product" />
      </div>
    </div>
  );
}
