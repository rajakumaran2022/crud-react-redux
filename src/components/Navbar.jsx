import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow fixed-top bg-secondary py-2">
        <div className="container">
          <Link to="/" className="navbar-brand mx-auto text-info">
            CRUD OPERATION - REACT REDUX
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
