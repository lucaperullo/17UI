import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BackNav() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="text-50-500 button-left">
          <IoChevronBackSharp />
        </div>
      </Link>
    </div>
  );
}
