import React from "react";
import {
  IoBasketOutline,
  IoIdCardOutline,
  IoOptionsOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="sections">
        <div className="row">
          <div className="profile">
            <span className="text-40-500">
              <IoIdCardOutline />
            </span>
          </div>
          <div className="shop">
            <Link to="/shop">
              <span className="text-40-500">
                <IoBasketOutline />
              </span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="my-store">
            <Link to="/my-store">
              <span className="text-40-500">
                <IoStorefrontOutline />
              </span>
            </Link>
          </div>
          <div className="store-editor">
            <span className="text-40-500">
              <IoOptionsOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
