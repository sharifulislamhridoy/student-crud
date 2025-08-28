// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#282c34" }}>
      <Link to="/" style={{ color: "white", margin: "10px" }}>Student List</Link>
      <Link to="/add" style={{ color: "white", margin: "10px" }}>Add Student</Link>
    </nav>
  );
}

export default Navbar;
