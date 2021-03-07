import React, { useEffect } from "react";
import "./styles/navbar.css";
import { fetchProducts } from "../actions";
import { connect } from "react-redux";

const NavBar = () => {
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Clone</h1>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default connect(null, { fetchProducts })(NavBar);
