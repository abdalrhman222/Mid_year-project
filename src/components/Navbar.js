import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = ({ auth }) => {
  return (
    <nav>
      <h2 className="navbar-brand">Clothes</h2>
      <Link to="/Home" className="link">
        Home
      </Link>
      <Link to="/Save" className="link">
        Save
      </Link>
      <Link to="/Contact" className="link">
        Contact us{" "}
      </Link>
      {auth ? null : (
        <Link to="/LogIn" className="link">
          Log In{" "}
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
