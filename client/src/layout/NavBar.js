import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  navbar-dark bg-secondary bg-body-tertiary"
        style={{ height: "300px" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ marginLeft: "50px" }}>
            Demo Full Stack Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="btn btn-outline-light"
            to="/addUser"
            style={{ marginRight: "70px" }}
          >
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
